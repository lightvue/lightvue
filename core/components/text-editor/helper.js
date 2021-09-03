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

  // remove style
  if (action.initial(container)) {
    return 'initial';
  }

  const style = findStyleNode(container, action.style);

  console.warn(style);
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

export { updateSelection, replaceSelection, getContainer };
