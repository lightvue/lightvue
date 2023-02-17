<template>
  <div class="contact__wrapper">
    <h1>CONTACT US</h1>
    <div class="contact-form__container">
      <h2>Have a query? Leave us a message.</h2>
      <div class="contact-form__fields">
        <lv-input type="text" v-model="value1" icon-left="light-icon-user" placeholder="Your Name" label="Name" style="margin-bottom: 20px" />
        <lv-input type="text" v-model="value1" icon-left="light-icon-mail" label="Email Address" placeholder="Your Email" style="margin-bottom: 20px" />
        <lv-textarea label="Textarea" placeholder="Enter your message here ..." rows="3" style="margin-bottom: 20px" /> <br />
        <div class="lv-fluid">
          <LvButton label="Submit" deep-shadow push size="lg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LvTextarea from 'lightvue/textarea';
export default {
  components: {
    LvTextarea,
  },
};
</script>

<style lang="scss">
.contact__wrapper {
  width: 100%;
  flex-direction: column;
  height: 80vh;
  display: flex;
  h1 {
    text-align: center;
    margin: 40px;
    font-size: 60px;
  }
  // align-items: center;
  // justify-content: center;
}
.contact-form__container {
  align-self: center;
  max-width: 700px;
  h2 {
    text-align: center;
    font-size: 25px;
    letter-spacing: 0.3px;
  }
}
</style>
