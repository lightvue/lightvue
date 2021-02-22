export default function (to, from, savedPosition) {
  if (to.hash) {
    const el = document.getElementById(to.hash.substring(1));
    if (el) {
      // a valid id on page.
      setTimeout(() => {
        return window.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' });
      }, 500); // wait before scrolling, for initial loading delay
      return;
    }
  }
  return window.scrollTo({ top: 0, behavior: 'smooth' });
}
