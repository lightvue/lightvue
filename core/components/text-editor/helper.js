const getSelection = function () {
  if (window && window.getSelection) {
    return window.getSelection();
  } else if (document && document.getSelection) {
    return document.getSelection();
  } else if (document && document.selection) {
    return document.selection.createRange().text;
  }
};

const getContainer = function () {
  const selection = getSelection();
  const anchorNode = selection.anchorNode;
  const focusNode = selection.focusNode;
  return {
    selection,
    container: anchorNode && (anchorNode.nodeType !== Node.TEXT_NODE && anchorNode.nodeType !== Node.COMMENT_NODE ? anchorNode : anchorNode.parentElement),
    endContainer: focusNode && (focusNode.nodeType !== Node.TEXT_NODE && focusNode.nodeType !== Node.COMMENT_NODE ? focusNode : focusNode.parentElement),
  };
};

const updateSelection = function (container, action) {
  container.style[action.style] = getStyle(container, action);
  cleanChildren(action, container);
};

const replaceSelection = async function (container, action, selection) {
  const range = selection.getRangeAt(0);

  const fragment = range.extractContents();

  const span = await createSpan(container, action);
  span.appendChild(fragment);

  cleanChildren(action, span);
  flattenChildren(action, span);

  range.insertNode(span);
  selection.selectAllChildren(span);
};

const getStyle = function (container, action) {
  if (!container) {
    return action.value;
  }

  // remove style, set property to initial
  if (action.initial(container)) {
    return 'initial';
  }

  const style = findStyleNode(container, action.style);

  if (action.initial(style)) {
    return 'initial';
  }

  return action.value;
};

function findStyleNode(node, style) {
  if (node.nodeName.toUpperCase() === 'HTML' || node.nodeName.toUpperCase() === 'BODY') return null;
  if (!node.parentNode) return null;

  const hasStyle = node.style[style] !== null && node.style[style] !== undefined && node.style[style] !== '';

  if (hasStyle) {
    return node;
  }

  return findStyleNode(node.parentNode, style);
}

const cleanChildren = function (action, span) {
  if (!span.hasChildNodes()) {
    return;
  }

  const children = Array.from(span.children).filter(element => {
    return element.style[action.style] !== undefined && element.style[action.style] !== '';
  });

  if (children && children.length > 0) {
    children.forEach(element => {
      element.style[action.style] = '';

      if (element.getAttribute('style') === '' || element.style === null) {
        element.removeAttribute('style');
      }
    });
  }

  const cleanChildrenChildren = Array.from(span.children).map(element => cleanChildren(action, element));

  if (!cleanChildrenChildren || cleanChildrenChildren.length <= 0) {
    return;
  }
};

async function createSpan(container, action) {
  const span = document.createElement('span');
  span.style[action.style] = getStyle(container, action);

  return span;
}

function flattenChildren(action, span) {
  if (!span.hasChildNodes()) {
    return;
  }

  const children = Array.from(span.children).filter(element => {
    const style = element.getAttribute('style');
    return !style || style === '';
  });

  if (children && children.length > 0) {
    children.forEach(element => {
      const styledChildren = element.querySelectorAll('[style]');
      if (!styledChildren || styledChildren.length === 0) {
        const text = document.createTextNode(element.textContent);
        element.parentElement.replaceChild(text, element);
      }
    });
    return;
  }

  const flattenChildrenChildren = Array.from(span.children).map(element => {
    return flattenChildren(action, element);
  });

  if (!flattenChildrenChildren || flattenChildrenChildren.length <= 0) {
    return;
  }

  Promise.all(flattenChildrenChildren);
}

const format = function (tool = null) {
  const { selection, container } = getContainer();
  if (selection.toString()) {
    const sameSelection = container && container.innerText === selection.toString();

    if (sameSelection && container.style.type !== undefined) {
      updateSelection(container, {
        style: tool.property,
        value: tool.value,
        initial: element => element && element.style[tool.property] === tool.value,
      });
      return;
    }

    replaceSelection(
      container,
      {
        style: tool.property,
        value: tool.value,
        initial: element => element && element.style[tool.property] === tool.value,
      },
      selection
    );
  } else {
    let range = selection.getRangeAt(0);
    range.deleteContents();
    let elem = document.createElement('span');
    elem.innerHTML = '\u200B';

    elem.style[tool.property] = container.style[tool.property] === tool.value ? 'initial' : tool.value;

    range.insertNode(elem);
    range.selectNodeContents(elem);
  }
};

const heading = function (tool = null) {
  const { selection, container } = getContainer();
  let range = selection.getRangeAt(0);
  let blockParent = container.closest('.lv-text-editor p');
  if (selection.toString()) {
    let elem = document.createElement(tool.tag);
    elem.innerHTML = selection.toString();
    if (blockParent && blockParent.innerText == selection.toString()) {
      blockParent.replaceWith(elem);
      return;
    }
    blockParent && blockParent.parentNode.insertBefore(elem, blockParent.nextSibling);
  } else {
    if (container.localName == tool.tag) {
      let elem = document.createElement('p');
      elem.innerHTML = container.innerHTML;
      container.replaceWith(elem);
    } else {
      let elem = document.createElement(tool.tag);
      elem.innerHTML = '\u200B';
      blockParent && blockParent.localName == 'p' && blockParent.innerHTML.toString() === '<br>' ? blockParent.parentNode.insertBefore(elem, blockParent) : blockParent.parentNode.insertBefore(elem, blockParent.nextSibling);
      range.selectNodeContents(elem);
    }
  }
};

const code = function (tool = null) {
  // this.tools[this.tools.findIndex(t => t.name == tool.name)].active = !this.tools[this.tools.findIndex(t => t.name == tool.name)].active;
  const { selection, container } = getContainer();

  let range = selection.getRangeAt(0);
  let elem;
  if (container.localName !== tool.tag) {
    elem = document.createElement(tool.tag);
    elem.innerHTML = selection.toString() || '\u200B';
    range.deleteContents();
    range.insertNode(elem);
    range.selectNodeContents(elem);
  } else {
    elem = document.createElement('span');
    elem.innerHTML = '\u200B';
    container.parentNode.appendChild(elem);
    range.selectNodeContents(elem);
  }
};

const list = function (tool = null) {
  const { selection, container } = getContainer();
  const item = container.closest('.lv-text-editor__content ul') || container.closest('.lv-text-editor__content ol');

  if (item) {
    // interchange list
    if (tool.tag != item.localName) {
      const newList = document.createElement(tool.tag);
      for (let i of item.children) {
        const item = document.createElement(i.localName);
        item.innerHTML = i.innerHTML;
        newList.appendChild(item);
      }
      item.parentNode.insertBefore(newList, item);
      item.parentNode.removeChild(item);
    } else {
      // remove list
      const newItem = document.createElement('div');
      for (let i of item.children) {
        const item = document.createElement('p');
        item.innerHTML = i.innerHTML;
        newItem.appendChild(item);
      }
      item.parentNode.insertBefore(newItem, item);
      item.parentNode.removeChild(item);
    }
  } else {
    // new list
    let range = selection.getRangeAt(0);
    const newList = document.createElement(tool.tag);
    const li = document.createElement('li');
    li.innerHTML = selection.toString() || '\u200B';
    newList.appendChild(li);
    // container.appendChild(newList);
    container.localName == 'p' && container.innerHTML.toString() === '<br>' ? container.parentNode.insertBefore(newList, container) : container.parentNode.insertBefore(newList, container.nextSibling);

    range.selectNodeContents(newList);
  }
};

const align = function (tool) {
  const { container, endContainer } = getContainer();

  const enclosingContainer = container.closest('.lv-text-editor li') || container.closest('.lv-text-editor li') || container.closest('.lv-text-editor p') || container.closest('.lv-text-editor h1') || container.closest('.lv-text-editor h2') || container.closest('.lv-text-editor__content div');

  const enclosingEndContainer = endContainer.closest('.lv-text-editor li') || endContainer.closest('.lv-text-editor li') || endContainer.closest('.lv-text-editor p') || container.closest('.lv-text-editor h1') || container.closest('.lv-text-editor h2') || endContainer.closest('.lv-text-editor__content div');

  let i = Array.prototype.indexOf.call(enclosingContainer.parentElement.children, enclosingContainer);
  let j = Array.prototype.indexOf.call(enclosingEndContainer.parentElement.children, enclosingEndContainer);

  if (j < i) [i, j] = [j, i];

  for (let index = i; index <= j; index++) {
    if (enclosingContainer.parentElement.children[index].classList.contains(tool.value)) {
      enclosingContainer.parentElement.children[index].classList.remove(tool.value);
    } else {
      ['left', 'right', 'center', 'justify'].forEach(item => {
        enclosingContainer.parentElement.children[index].classList.remove(item);
      });
      enclosingContainer.parentElement.children[index].classList.toggle(tool.value);
    }
  }
};

export { format, heading, list, align, getContainer, code };
