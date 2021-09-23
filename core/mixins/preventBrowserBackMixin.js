export default {
  data() {
    return {
      popstateEvent: null,
    };
  },
  methods: {
    preventPopstate() {
      window.history.pushState({ id: 2 }, null, null);
      window.addEventListener('popstate', this.handleOnPopstate);
      this.popstateEvent = true;
    },
    handleOnPopstate() {
      window.removeEventListener('popstate', null);
      this.popstateEvent = null;
      if (this.handleOnBrowserBack) {
        this.handleOnBrowserBack();
      }
    },
    manuallyClosePopstate() {
      if (this.popstateEvent) {
        // window.history.back();
        if (this.$router) {
          this.$router.go(-1);
        }
        window.removeEventListener('popstate', null);
        this.popstateEvent = null;
      }
    },
  },
};
