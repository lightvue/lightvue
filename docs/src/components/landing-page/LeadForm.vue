<template>
  <div style="padding: 16px 32px">
    <div class="lead-form__title">Find your Perfect UI Solution</div>
    <lv-input :bottom-bar="true" placeholder="Your Name" v-model="name" label="Name" icon-left="light-icon-user" /> <br />
    <lv-input :bottom-bar="true" placeholder="Your Email" v-model="email" label="Email" icon-left="light-icon-mail" /> <br />
    <lv-input :bottom-bar="true" placeholder="Your Organization" v-model="organization" label="Your Organization" icon-left="light-icon-building-skyscraper" /> <br />
    <lv-dropdown v-model="selectedDesignation" :options="designation" optionLabel="name" placeholder="Profession" clearable label="What role best describes you?" icon-left="light-icon-briefcase" bottom-bar /> <br />
    <lv-textarea :bottom-bar="true" auto-resize placeholder="Write to us.." rows="4" v-model="comments" label="How we would help you to build better projects?" /> <br />
    <lv-checkbox name="newsletter" v-model="newsletterChecked" rounded thick pulse outline color="success">
      <span class="dropdown-label"> Subscribe to <b class="--brand-color">LightVue</b> Newsletter </span>
    </lv-checkbox>
    <br /><br />
    <lv-button icon-right="light-icon-chevron-right" class="page-button --dark lead-form__submit-btn" @click="sendLead" :disabled="loading">
      <template #append><LvProgressSpinner v-if="loading" size="13px" color="#ffffff" /></template>Submit
    </lv-button>
  </div>
</template>

<script>
import LvCheckbox from 'lightvue/checkbox';
import LvTextarea from 'lightvue/textarea';
import LvDropdown from 'lightvue/dropdown';
import LvProgressSpinner from 'lightvue/progress-spinner';
export default {
  components: {
    LvTextarea,
    LvDropdown,
    LvCheckbox,
    LvProgressSpinner,
  },
  data() {
    return {
      designation: [{ name: 'CEO' }, { name: 'Developer' }, { name: 'Designer' }, { name: 'Porject or Product Manager' }, { name: 'Sales and Marketing' }, { name: 'Other' }],
      name: null,
      email: null,
      organization: null,
      selectedDesignation: null,
      comments: null,
      newsletterChecked: null,
      loading: false,
      // submissionStatus: false,
    };
  },
  methods: {
    async sendLead() {
      this.loading = true;
      let leadDetails = {
        Email: this.email,
        Name: this.name,
        Organization: this.organization,
        Designation: this.selectedDesignation,
        Comments: this.comments,
        Newsletter: this.newsletterChecked,
      };
      console.log(leadDetails);
      let geo_info = {};
      try {
        await fetch('https://ipinfo.io/json?token=5d6d3acb07ec46')
          .then(_ => {
            return _.json();
          })
          .then(resp => {
            geo_info = resp;
          });
      } catch (err) {
        //
      }
      let navigator = {
        user_agent: window.navigator.userAgent,
        vendor: window.navigator.vendor,
        platform: window.navigator.platform,
      };
      let api_base_url = 'https://api.formstudio.io';
      const url = api_base_url;

      fetch(url + '/lightvueLead', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...leadDetails, geo_info, navigator }),
      })
        .then(response => {
          this.loading = false;
          // TODO: Notification isn't working in Vue2.x docs.
          this.name = null;
          this.email = null;
          this.organization = null;
          this.selectedDesignation = null;
          this.comments = null;
          this.newsletterChecked = null;
          this.$notification.add({ type: 'success', title: 'Thanks', content: 'Your Message has been received', duration: 3000, position: 'top-right' });
          this.$emit('success');
        })
        .catch(e => {
          console.error(e);
          this.loading = false;
          this.$notification.add({ type: 'error', title: 'Something went wrong', content: 'Failed to submit your response, please try again later.', duration: 3000, position: 'top-right' });
        });
      // this.submissionStatus = true;
    },
  },
};
</script>
<style lang="scss">
.lead-form__title {
  text-align: center;
  position: relative;
  padding-bottom: 12px;
  margin-bottom: 32px;
  font-size: 32px;
  font-weight: 400;
  color: #143a56;
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 2px;
    width: 105px;
    background-color: teal;
  }
}
@media (max-width: '600px') {
  .lead-form__title {
    font-size: 20px;
  }
}
.lead-form__submit-btn {
  width: 200px !important;
  padding: 16px !important;
  margin: 20px auto;
  /* font-size: 20px; */
  text-transform: uppercase;
}
</style>
