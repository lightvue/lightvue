<template>
  <div class="wrapper">
    <div class="conatiner">
      <h2>Installation</h2>
      <div class="container__methods">
        <h3>Using npm</h3>
        <code-highlight lang="javascript">// v1.x
npm install light-icons --save</code-highlight>
        <br/>
        <h3>Import CSS file</h3>
        <code-highlight lang="css"
          >/* import in CSS files [with CSS Loader] */
@import "~light-icons/dist/light-icon.css";</code-highlight>
        <!-- <>OR</p> -->
        <code-highlight lang="javascript"
          >// import directly in JS files
import "light-icons/dist/light-icon.css";</code-highlight>
        <br/>
        <h3>Via unpkg CDN</h3>
        <code-highlight lang="html"
          ><!-- import in HTML file  -->
&lt;link href="https://unpkg.com/light-icons/dist/light-icon.css" rel="stylesheet"&gt;
</code-highlight>
      </div>
      <div>
        <br/>
        <h3>How to use</h3>
        <div class="instructions">
          Add <code>light-icon-*</code> class, either in <code>i</code> or <code>span</code> HTML Tag
        </div>
        <code-highlight
          >&lt;i class="light-icon-facebook"&gt;&lt;/i&gt;</code-highlight
        >
      </div>
    </div>
  </div>
</template>

<script>
import CodeHighlight from '@/components/docs-card/CodeHighlight.vue'

export default {
  components: { CodeHighlight },
}
</script>

<style scoped lang="scss">
h2 {
  font-size: 30px;
  padding-bottom: 9px;
  margin: 40px 0 20px;
  border-bottom: 1px solid #eee;
  font-weight: 500;
  color: #566d79;
  text-align: center;
}
h3 {
  font-size: 24px;
  color: #566d79;
  font-weight: 500;
}
pre {
  margin: 20px 0;
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  border-radius: 6px;
  background: #ffffff;
}
.instructions {
  color: #566d79;
  margin: 8px 0px;
  code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: #d3ecff;
    border-radius: 6px;
  }
}

</style>
