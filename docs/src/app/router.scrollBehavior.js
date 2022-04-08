export default function (to, from, savedPosition) {
  if (to.fullPath === from.fullPath) {
    // in case of preventBrowserBackMixin
    return;
  }
  if (to.hash) {
    setTimeout(() => {
      const el = document.getElementById(to.hash.substring(1));
      if (el) {
        // a valid id on page.
        return window.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' });
      }
    }, 300); // wait before scrolling, for initial loading delay
    return;
  }
  return window.scrollTo({ top: 0, behavior: 'smooth' });
}
