<template>
  <div class="footer__wrapper">
    <footer>
      <div class="contact">
        <nuxt-link :to="{ hash: '' }">
          <img src="/logo_v2.svg" alt="" width="220px" />
        </nuxt-link>
      </div>
      <div class="footer__links">
        <h6>Links</h6>
        <p><a href="#">Home</a></p>
        <p><nuxt-link to="/installation">Documentation</nuxt-link></p>
        <!-- <p><a target="_blank" href="https://github.com/">Github</a></p> -->
        <!-- <p><a target="_blank" href="#">Reach Us</a></p> -->
        <!-- <p><a target="_blank" href="#">Become Sponsor</a></p> -->
      </div>
      <div class="footer__products">
        <h6>Products</h6>
        <!-- <p><a href="#">Form Studio</a></p> -->
        <p><nuxt-link to="/icons/light-icons">Light Icons</nuxt-link></p>
        <p><a target="_blank" href="https://plugui.com/">Plug UI</a></p>
      </div>
      <div class="footer__form">
        <h6>Have an query?</h6>
        <div class="footer__form-email"><i class="light-icon-mail"></i><a target="_blank" href="mailto:info@lightvue.org">info@lightvue.org</a></div>
        <!-- <input type="email" name="email" placeholder="user@example.com" /> -->
        <!-- <button>Subscribe</button> -->
        <!-- <p>Follow for more</p> -->
        <!-- <a target="_blank" href="#"><i class="light-icon-brand-facebook"></i></a>
        <a target="_blank" href="#"><i class="light-icon-brand-twitter"></i></a>
        <a target="_blank" href="#"><i class="light-icon-brand-instagram"></i></a>
        <a target="_blank" href="#"><i class="light-icon-brand-github"></i></a> -->
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.footer__wrapper {
  background: #143a56;
  padding: 0 160px 0;
}
footer {
  margin: auto;
  max-width: 1600px;
  width: auto;
  background-color: #143a56;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 60px;
  padding-bottom: 60px;
  p {
    line-height: 180%;
    color: #eeecec;
  }
  h6,
  div {
    margin-bottom: 20px;
  }
  h6 {
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 18px;
    color: #38b4ab;
  }
}
a {
  text-decoration: none;
  color: #ffffff;
}
footer .contact {
  display: flex;
  align-items: center;
  flex-direction: column;
}
footer .contact {
  width: 250px;
  h2 {
    color: #38b4ab;
    font-size: 40px;
    letter-spacing: 0.2rem;
  }
  img {
    // height: 150px;
    width: 150px;
  }
}
footer .footer__links {
  margin-right: 20px;
}
footer .footer__links p {
  margin-bottom: 8px;
}
footer .footer__products p {
  margin-bottom: 8px;
  width: 150px;
}
footer .footer__form {
  i {
    color: #fff;
    margin-top: 2px;
    margin-right: 5px;
  }
  .footer__form-email {
    display: flex;
    align-items: center;
  }
}
// footer .footer__form input {
//   outline: 0;
//   border: none;
//   color: #fff;
//   padding: 14px 16px;
//   border-radius: 4px;
//   background-color: #224b69;
//   display: block;
//   width: 100%;
// }
// footer .footer__form button {
//   margin: 20px 0;
//   outline: none;
//   border: none;
//   width: fit-content;
//   text-decoration: none;
//   padding: 12px 50px;
//   border-radius: 5px;
//   max-width: 100%;
//   color: #fff;
//   font-weight: 500;
//   white-space: nowrap;
//   cursor: pointer;
//   -webkit-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
//   transition: all 0.3s ease-in-out;
//   background-color: #00a3a0;
//   box-shadow: 0 6px 15px -1px #00a3a0;
// }
// footer .footer__form a {
//   display: inline-block;
//   width: 30px;
//   height: 30px;
//   margin-right: 5px;
//   border-radius: 50%;
//   text-align: center;
//   line-height: 20px;
//   &:hover {
//     transform: scale(1.5);
//     transition: all 0.2s ease-in-out;
//   }
// }
@media (max-width: 767px) {
  .footer__wrapper {
    padding: 0 30px;
    // display: none;
  }
  footer .footer__links {
    width: 120px;
  }
  footer .footer__products {
    width: 120px;
  }
}
</style>
