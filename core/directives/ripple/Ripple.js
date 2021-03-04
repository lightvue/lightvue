import DomHandler from 'lightvue/utils/DomHandler';
import './Ripple.css';

function bindEvents(el) {
  el.addEventListener('mousedown', onMouseDown);
  DomHandler.addClass(el, 'lv-ripple');
}

function unbindEvents(el) {
  el.removeEventListener('mousedown', onMouseDown);
}

function create(el) {
  let ink = document.createElement('span');
  ink.className = 'lv-ink';
  el.appendChild(ink);

  ink.addEventListener('animationend', onAnimationEnd);
}

function remove(el) {
  let ink = getInk(el);
  if (ink) {
    unbindEvents(el);
    ink.removeEventListener('animationend', onAnimationEnd);
    ink.remove();
  }
}

function onMouseDown(event) {
  let target = event.currentTarget;
  let ink = getInk(target);
  if (!ink || getComputedStyle(ink, null).display === 'none') {
    return;
  }

  DomHandler.removeClass(ink, 'lv-ink-active');
  if (!DomHandler.getHeight(ink) && !DomHandler.getWidth(ink)) {
    let d = Math.max(DomHandler.getOuterWidth(target), DomHandler.getOuterHeight(target));
    ink.style.height = d + 'px';
    ink.style.width = d + 'px';
  }

  let offset = DomHandler.getOffset(target);
  let x = event.pageX - offset.left + document.body.scrollTop - DomHandler.getWidth(ink) / 2;
  let y = event.pageY - offset.top + document.body.scrollLeft - DomHandler.getHeight(ink) / 2;

  ink.style.top = y + 'px';
  ink.style.left = x + 'px';
  DomHandler.addClass(ink, 'lv-ink-active');
}

function onAnimationEnd(event) {
  DomHandler.removeClass(event.currentTarget, 'lv-ink-active');
}

function getInk(el) {
  for (let i = 0; i < el.children.length; i++) {
    if (el.children[i].className.indexOf('lv-ink') !== -1) {
      return el.children[i];
    }
  }
  return null;
}

const Ripple = {
  inserted(el, binding, vnode) {
    //Vue2
    // if (vnode.context.$lightvue && vnode.context.$lightvue.ripple) {
    create(el);
    bindEvents(el);
    // }
  },
  unbind(el) {
    //Vue2
    remove(el);
  },
  mounted(el, binding, vnode) {
    //Vue3
    // if (vnode.context.$lightvue && vnode.context.$lightvue.ripple) {
    create(el);
    bindEvents(el);
    // }
  },
  unmounted(el) {
    //Vue3
    remove(el);
  },
};

export default Ripple;
