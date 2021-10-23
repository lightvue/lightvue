<template>
  <div>
    <lv-input :bottom-bar="true" placeholder="Your Name" v-model="name" label="Name" icon-left="light-icon-user" /> <br />
    <lv-input :bottom-bar="true" placeholder="Your Email" v-model="email" label="Email" icon-left="light-icon-mail" /> <br />
    <lv-input :bottom-bar="true" placeholder="Your Organization" v-model="organization" label="Your Organization" icon-left="light-icon-building-skyscraper" /> <br />
    <lv-dropdown v-model="selectedDesignation" :options="designation" optionLabel="name" placeholder="Profession" clearable label="What role best describes you?" icon-left="light-icon-briefcase" bottom-bar /> <br />
    <lv-textarea :bottom-bar="true" placeholder="Write to us.." v-model="comments" label="How we would help you to build better projects?" /> <br />
    <lv-checkbox name="newsletter" v-model="newsletterChecked" rounded thick pulse outline color="success">
      <span class="dropdown-label"> Subscribe to <b class="--brand-color">LightVue</b> Newsletter </span>
    </lv-checkbox>
    <lv-button :push="true" :deep-shadow="true" label="Submit" class="leadform__button" @click="sendLead" style="width: 100%; margin-top: 1rem" />
  </div>
</template>

<script>
import LvCheckbox from 'lightvue/checkbox';
import LvTextarea from 'lightvue/textarea';
import LvDropdown from 'lightvue/dropdown';
export default {
  components: {
    LvTextarea,
    LvDropdown,
    LvCheckbox,
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
      // submissionStatus: false,
    };
  },
  methods: {
    async sendLead() {
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
          // TODO: Notification isn't working in Vue2.x docs.
          this.$notification.add({ type: 'success', title: 'Thanks', content: 'Your Message has been recieved', duration: 3000 });

          this.$emit('success');
        })
        .catch(function (e) {
          console.error(e);
        });
      // this.submissionStatus = true;
    },
  },
};
</script>
