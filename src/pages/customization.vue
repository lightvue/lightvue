<template>
  <div class="custom__wrapper">
    <div class="custom__container">
      <h1>Customize</h1>
      <p>LightVue Can be easily customized in order to make the custom theme which can fulfill the needs of user's project</p>
      <h2>Changing Variables in scss file</h2>
      <p>LightVue's scss variable file have a primary and secondary color. With addition to that, scss file also have primary and secondary text-color</p>
      <div class="custom__process">
        <div class="custom__content">
          <p>LightVue has <strong>two</strong> variable files divided into <strong>4</strong> sections:</p>
          <ol class="custom__ol">
            <li>
              <strong>Initial variables</strong>: where you define variables by <strong>literal value</strong>, like:
              <ul>
                <li><strong>colors</strong>: <code>$blue: hsl(229, 53%, 53%)</code></li>
                <li><strong>font sizes</strong>: <code>$size-1: 3rem</code></li>
                <li><strong>dimensions</strong>: <code>$gap: 32px</code></li>
                <li><strong>other values</strong>: <code>$easing: ease-out</code> or <code>$radius-large: 6px</code></li>
              </ul>
            </li>
            <li>
              <strong>Derived variables</strong> where variables are <strong>calculated</strong> from the values set in the previous file. For example, you can have:
              <ul>
                <li>
                  <strong>Primary colors</strong> derived from the initial variables:
                  <ul>
                    <li><code>$primary: $turquoise</code></li>
                    <li><code>$link: $blue</code></li>
                    <li><code>$info: $cyan</code></li>
                    <li><code>$success: $green</code></li>
                    <li><code>$warning: $yellow</code></li>
                    <li><code>$danger: $red</code></li>
                    <li><code>$dark: $grey-darker</code></li>
                    <li><code>$text: $grey-dark</code></li>
                  </ul>
                </li>
                <li><code>$background: $white-ter</code>: a general background color</li>
                <li><code>$link: $blue</code>: the links use the primary color</li>
                <li><code>$family-primary: $family-sans-serif</code>: the primary font family is the sans-serif one</li>
                <li>
                  <strong>Lists and maps</strong> which are collections of already defined variables:
                  <ul>
                    <li><code>$colors: mergeColorMaps(("white": ($white, $black), "black": ($black, $white), "light": ($light, $light-invert), "dark": ($dark, $dark-invert), "primary": ($primary, $primary-invert, $primary-light, $primary-dark), "link": ($link, $link-invert, $link-light, $link-dark), "info": ($info, $info-invert, $info-light, $info-dark), "success": ($success, $success-invert, $success-light, $success-dark), "warning": ($warning, $warning-invert, $warning-light, $warning-dark), "danger": ($danger, $danger-invert, $danger-light, $danger-dark)), $custom-colors)</code></li>
                    <li><code>$shades: mergeColorMaps(("black-bis": $black-bis, "black-ter": $black-ter, "grey-darker": $grey-darker, "grey-dark": $grey-dark, "grey": $grey, "grey-light": $grey-light, "grey-lighter": $grey-lighter, "white-ter": $white-ter, "white-bis": $white-bis), $custom-shades)</code></li>
                    <li><code>$sizes: $size-1 $size-2 $size-3 $size-4 $size-5 $size-6 $size-7</code></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ol>

          <p>To <strong>override</strong> any of these variables, just set them <em>before</em> importing LightVue.</p>
        </div>
      </div>
      <p>OR</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// .custom__wrapper {
//   padding: 2rem 8rem;
// }
.custom__container {
  h1 {
    text-align: center;
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.5;
    margin: 50px 0;
    color: #585858;
  }
  p {
    margin-top: 1rem;
    line-height: 1.625;
    font-size: 16px;
  }
}
.custom__ol {
  list-style-position: outside;
  margin-left: 2em;
  margin-top: 1em;
  li {
    list-style-type: decimal;
    font-size: 1.125rem;
    list-style: disc outside;
  }
}
</style>
