const shallowRef = async function (context, component) {
  if (context && context.$lightvue && context.$lightvue.version === 3) {
    let Vue = await import('vue');
    return Vue.shallowRef(component);
  } else {
    return component;
  }
};

export default shallowRef;
