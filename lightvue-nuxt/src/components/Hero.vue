<template>
  <div>
    <div class="hero-wrapper">
      <div class="hero-logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="hero-container">
        <div class="hero-container__row">
          <div class="hero-container__content">
            <h1 class="hero-container__heading">LightVue</h1>

            <p class="hero-container__subtext">
              The Ultimate UI Component Library
              <span class="subtext-highlight">for Vue</span>
            </p>
          </div>
        </div>
        <div class="hero-container__row">
          <div class="hero-container__buttons">
            <button class="hero-button">Get Started</button>
            <button class="hero-button">Documentation</button>
          </div>
        </div>
        <div class="hero-container__row">
          <div class="hero-container__image">
            <img class="hero-image" src="@/assets/hero-bg-2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- Features Section -->
    <div class="features-wrapper">
      <div class="features-container">
        <div class="features-row">
          <h2 class="features-heading">Why Light-Vue?</h2>
        </div>
        <div class="features-div-container">
          <div class="features-div">
            <div class="features-icon-div">
              <i class="light-icon-aperture"></i>
            </div>
            <div class="features-content">
              <h3 class="features-content__heading">Light Weight</h3>
              <p class="features-content__subtext">
                Light Vue is only xyz kb in size and if the user want, they can
                import the desired components instead of importing the whole UI
                library.
              </p>
            </div>
          </div>
          <div class="features-div">
            <div class="features-icon-div">
              <i class="light-icon-layers-difference"></i>
            </div>
            <div class="features-content">
              <h3 class="features-content__heading">Costumizable</h3>
              <p class="features-content__subtext">
                Light Vue is very easy to costumize and allows user to build the
                theme according to their likings.
              </p>
            </div>
          </div>
          <div class="features-div">
            <div class="features-icon-div">
              <i class="light-icon-brand-github"></i>
            </div>
            <div class="features-content">
              <h3 class="features-content__heading">Open Source</h3>
              <p class="features-content__subtext">
                Light Vue is open source and Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Exercitationem, dolorem
                consequuntur. Fugit illo provident expedita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer Section -->

    <div class="footer-wrapper">
      <footer>
        <div class="contact">
          <a href="#">
            <img src="../assets/logo.png" alt="" />
          </a>
          <h2>Light-Vue</h2>
        </div>
        <div class="links">
          <h6>Links</h6>
          <p><a href="#">Home</a></p>
          <p><a href="#">Documentation</a></p>
          <p><a href="#">Github</a></p>
          <p><a href="#">Reach Us</a></p>
          <p><a href="#">Become Sponser</a></p>
        </div>
        <div class="products">
          <h6>More Products</h6>
          <p><a href="#">Form Studio</a></p>
          <p><a href="#">Light Icons</a></p>
          <p><a href="#">Plug UI</a></p>
        </div>
        <div class="footer-form">
          <h6>Subscribe for more Updates</h6>
          <!-- <p>Enter your email address below to get latest updates.<br>
     We promise you that we will not spam.</p>     -->
          <input type="email" name="email" placeholder="user@example.com" />
          <button>Subscribe</button>
          <p>Follow for more</p>
          <a href=""><i class="light-icon-brand-facebook"></i></a>
          <a href=""><i class="light-icon-brand-twitter"></i></a>
          <a href=""><i class="light-icon-brand-instagram"></i></a>
          <a href=""><i class="light-icon-brand-github"></i></a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
$primary-color: #008060;
$seconday-color: #143a56;
$text-color-primary: #143a56;
$text-color-secondary: #eeecec;
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  line-height: 1.5;
}

.hero-wrapper {
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  position: relative;
  padding-top: 32px;
  padding: 4em 0;
  background-image: url("../assets/wave.png");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  position: relative;
  padding-top: 32px;
  .hero-logo {
    display: flex;
    justify-content: center;
  }
  .hero-container {
    display: flow-root;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 5%;
    padding-right: 5%;
  }
  .hero-container__row {
    padding-left: 18px;
    padding-right: 18px;
    position: relative;
    width: 100%;
    float: left;
    .hero-container__content {
      text-align: center;
      .hero-container__heading {
        font-weight: 700;
        font-size: 3.75rem;
        margin-bottom: 0.25rem;
        letter-spacing: -0.2rem;
        color: $text-color-primary;
      }
      .hero-container__subtext {
        text-align: center;
        font-size: 2.25em;
        margin-bottom: 0.5em;
        color: $text-color-secondary;
        margin-bottom: 50px;
        .subtext-highlight {
          font-weight: 700;
          color: $text-color-primary;
        }
      }
    }
    .hero-container__buttons {
      display: flex;
      justify-content: center;

      .hero-button {
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
        background-color: #212326;
        color: #ffffff;
        display: inline-block;
        padding: 1em 1.8125em;
        border-radius: 4px;
        font-weight: 700;
        font-size: 1em;
        line-height: 1.133;
        border: 0px;
        outline: 0px;
        margin: 0 40px;
        margin-bottom: 0;
        cursor: pointer;
        &:hover {
          background: black;
        }
      }
    }
  }
  .hero-container__image {
    display: flex;
    justify-content: center;
    // padding: -40px;
    // margin: 40px;
    .hero-image {
      width: 100%;
      // height: 500px;
    }
  }
}
@media only screen and (max-width: 600px) {
  .hero-button {
    padding: 0.6rem 1.2rem !important;
    margin: 0 10px !important;
  }
}
// Features Section
.features-wrapper {
  padding: 80px 0;
  .features-container {
    max-width: 1600px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    color: #585858;
    .features-row {
      margin-bottom: 30px;
      .features-heading {
        text-align: center;
        font-size: 50px;
        margin-top: 22px;
        margin-bottom: 11px;
      }
    }
  }
  .features-div-container {
    display: flex;
    flex-basis: 33%;
    justify-content: space-between;
    .features-div {
      margin: 10px;
      .features-icon-div {
        display: flex;
        justify-content: center;
        i {
          font-size: 60px;
          font-weight: bolder;
        }
      }
      .features-content {
        .features-content__heading {
          text-align: center;
          font-size: 26px;
          font-weight: 900;
          line-height: 1.1;
          margin-top: 22px;
          margin-bottom: 11px;
        }
        .features-content__subtext {
          text-align: center;
          font-size: 17px;
          line-height: 1.6rem;
        }
      }
    }
  }
}
@media (max-width: 780px) {
  .features-div-container {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
}
// Footer
.footer-wrapper {
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
  p {
    line-height: 180%;
    color: $text-color-secondary;
  }
  h6,
  div {
    margin-bottom: 20px;
  }
  h6 {
    margin-top: 25px;
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
    height: 150px;
    width: 150px;
  }
}
footer .links {
  margin-right: 20px;
}
footer .links p {
  margin-bottom: 8px;
}
footer .products p {
  margin-bottom: 8px;
  width: 150px;
}
footer .footer-form p,
input {
  padding: 5px;
}
footer .footer-form input {
  outline: 0;
  border: none;
  color: #fff;
  padding: 14px 16px;
  border-radius: 4px;
  background-color: #224b69;
  display: block;
  width: 100%;
}
footer .footer-form button {
  margin: 20px 0;
  outline: none;
  border: none;
  width: fit-content;
  text-decoration: none;
  padding: 12px 50px;
  border-radius: 5px;
  max-width: 100%;
  color: #fff;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all 0.3s ease-in-out;
  background-color: #00a3a0;
  box-shadow: 0 6px 15px -1px #00a3a0;
}
footer .footer-form a {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
  &:hover {
    transform: scale(1.5);
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: 767px) {
    .footer-wrapper {
      padding: 15px 30px !important;
      // justify-content: initial;
    }
    footer .links {
      width: 120px;
    }
    footer .products {
      width: 120px;
    }
  }
}
</style>
