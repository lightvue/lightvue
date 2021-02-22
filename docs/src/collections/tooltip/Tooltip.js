//FOCUS event not working

import UniqueComponentId from 'lightvue/utils/UniqueComponentId';
import DomHandler from 'lightvue/utils/DomHandler';
import './Tooltip.css';
import './tooltipTheme.css';
function bindEvents(el) {
  const modifiers = el.$_lvtooltipModifiers;
  if (modifiers.focus) {
    el.addEventListener('focus', onFocus);
    el.addEventListener('blur', onBlur);
  } else {
    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mouseleave', onMouseLeave);
    el.addEventListener('click', onClick);
  }
}

function unbindEvents(el) {
  const modifiers = el.$_lvtooltipModifiers;
  if (modifiers.focus) {
    el.removeEventListener('focus', onFocus);
    el.removeEventListener('blur', onBlur);
  } else {
    el.removeEventListener('mouseenter', onMouseEnter);
    el.removeEventListener('mouseleave', onMouseLeave);
    el.removeEventListener('click', onClick);
  }
}

function onMouseEnter(event) {
  show(event.currentTarget);
}

function onMouseLeave(event) {
  hide(event.currentTarget);
}

function onFocus(event) {
  show(event.currentTarget);
}

function onBlur(event) {
  hide(event.currentTarget);
}

function onClick(event) {
  hide(event.currentTarget);
}

function show(el) {
  if (!el.$_lvtooltipValue) {
    return;
  }

  let tooltipElement = create(el);
  align(el);
  DomHandler.fadeIn(tooltipElement, 250);
  tooltipElement.style.zIndex = ++DomHandler.zindex;

  window.addEventListener('resize', function onWindowResize() {
    hide(el);
    this.removeEventListener('resize', onWindowResize);
  });
}

function hide(el) {
  remove(el);
}

function getTooltipElement(el) {
  return document.getElementById(el.$_lvtooltipId);
}

function create(el) {
  const id = UniqueComponentId() + '_tooltip';
  el.$_lvtooltipId = id;

  let container = document.createElement('div');
  container.id = id;

  let tooltipArrow = document.createElement('div');
  tooltipArrow.className = 'lv-tooltip-arrow';
  container.appendChild(tooltipArrow);

  let tooltipText = document.createElement('div');
  tooltipText.className = 'lv-tooltip-text';
  tooltipText.innerHTML = el.$_lvtooltipValue;

  container.appendChild(tooltipText);
  document.body.appendChild(container);

  container.style.display = 'inline-block';

  return container;
}

function remove(el) {
  if (el) {
    let tooltipElement = getTooltipElement(el);
    if (tooltipElement && tooltipElement.parentElement) {
      document.body.removeChild(tooltipElement);
    }
    el.$_lvtooltipId = null;
  }
}

function align(el) {
  const modifiers = el.$_lvtooltipModifiers;

  if (modifiers.top) {
    alignTop(el);
    if (isOutOfBounds(el)) {
      alignBottom(el);
    }
  } else if (modifiers.left) {
    alignLeft(el);
    if (isOutOfBounds(el)) {
      alignRight(el);

      if (isOutOfBounds(el)) {
        alignTop(el);

        if (isOutOfBounds(el)) {
          alignBottom(el);
        }
      }
    }
  } else if (modifiers.bottom) {
    alignBottom(el);
    if (isOutOfBounds(el)) {
      alignTop(el);
    }
  } else {
    alignRight(el);
    if (isOutOfBounds(el)) {
      alignLeft(el);

      if (isOutOfBounds(el)) {
        alignTop(el);

        if (isOutOfBounds(el)) {
          alignBottom(el);
        }
      }
    }
  }
}

function getHostOffset(el) {
  let offset = el.getBoundingClientRect();
  let targetLeft = offset.left + DomHandler.getWindowScrollLeft();
  let targetTop = offset.top + DomHandler.getWindowScrollTop();

  return { left: targetLeft, top: targetTop };
}

function alignRight(el) {
  preAlign(el, 'right');
  let tooltipElement = getTooltipElement(el);
  let hostOffset = getHostOffset(el);
  let left = hostOffset.left + DomHandler.getOuterWidth(el);
  let top = hostOffset.top + (DomHandler.getOuterHeight(el) - DomHandler.getOuterHeight(tooltipElement)) / 2;
  tooltipElement.style.left = left + 'px';
  tooltipElement.style.top = top + 'px';
}

function alignLeft(el) {
  preAlign(el, 'left');
  let tooltipElement = getTooltipElement(el);
  let hostOffset = getHostOffset(el);
  let left = hostOffset.left - DomHandler.getOuterWidth(tooltipElement);
  let top = hostOffset.top + (DomHandler.getOuterHeight(el) - DomHandler.getOuterHeight(tooltipElement)) / 2;
  tooltipElement.style.left = left + 'px';
  tooltipElement.style.top = top + 'px';
}

function alignTop(el) {
  preAlign(el, 'top');
  let tooltipElement = getTooltipElement(el);
  let hostOffset = getHostOffset(el);
  let left = hostOffset.left + (DomHandler.getOuterWidth(el) - DomHandler.getOuterWidth(tooltipElement)) / 2;
  let top = hostOffset.top - DomHandler.getOuterHeight(tooltipElement);
  tooltipElement.style.left = left + 'px';
  tooltipElement.style.top = top + 'px';
}

function alignBottom(el) {
  preAlign(el, 'bottom');
  let tooltipElement = getTooltipElement(el);
  let hostOffset = getHostOffset(el);
  let left = hostOffset.left + (DomHandler.getOuterWidth(el) - DomHandler.getOuterWidth(tooltipElement)) / 2;
  let top = hostOffset.top + DomHandler.getOuterHeight(el);
  tooltipElement.style.left = left + 'px';
  tooltipElement.style.top = top + 'px';
}

function preAlign(el, position) {
  let tooltipElement = getTooltipElement(el);
  tooltipElement.style.left = -999 + 'px';
  tooltipElement.style.top = -999 + 'px';
  tooltipElement.className = 'lv-tooltip lv-component lv-tooltip-' + position;
}

function isOutOfBounds(el) {
  let tooltipElement = getTooltipElement(el);
  let offset = tooltipElement.getBoundingClientRect();
  let targetTop = offset.top;
  let targetLeft = offset.left;
  let width = DomHandler.getOuterWidth(tooltipElement);
  let height = DomHandler.getOuterHeight(tooltipElement);
  let viewport = DomHandler.getViewport();

  return targetLeft + width > viewport.width || targetLeft < 0 || targetTop < 0 || targetTop + height > viewport.height;
}

const Tooltip = {
  bind(el, options) {
    //Vue2
    el.$_lvtooltipModifiers = options.modifiers;
    el.$_lvtooltipValue = options.value;
    bindEvents(el);
  },
  unbind(el) {
    //Vue2
    remove(el);
    unbindEvents(el);
  },
  update(el, options) {
    //Vue2
    el.$_lvtooltipModifiers = options.modifiers;
    el.$_lvtooltipValue = options.value;
  },
  mounted(el, options) {
    //Vue3
    el.$_lvtooltipModifiers = options.modifiers;
    el.$_lvtooltipValue = options.value;
    bindEvents(el);
  },
  unmounted(el) {
    //Vue3
    remove(el);
    unbindEvents(el);
  },
  updated(el, options) {
    //Vue3
    el.$_lvtooltipModifiers = options.modifiers;
    el.$_lvtooltipValue = options.value;
  },
};

export default Tooltip;
