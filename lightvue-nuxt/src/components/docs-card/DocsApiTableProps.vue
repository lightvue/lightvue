<template>
  <div class="api-table__wrap">
    <div class="api-table --props">
      <div class="api-table__header">
        <div class="api-table__cell --name">Props</div>
        <div class="api-table__cell">Type</div>
        <div class="api-table__cell">Default</div>
        <div class="api-table__cell">Description</div>
      </div>
      <div
        class="api-table__row"
        v-for="property in propsList"
        :key="property.name"
      >
        <div class="api-table__cell --name">{{ property.name }}</div>
        <div class="api-table__cell --type">{{ property.type }}</div>
        <div class="api-table__cell --default">{{ property.default }}</div>
        <div class="api-table__cell --description">
          {{ property.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { copyToClipboard } from "../../utils";
export default {
  props: ["propsList"],
  data() {
    return {
    };
  },
  created() {
    if (this.apiPath) {
      this.fetchAPI();
    }
  },
  methods: {
    async fetchAPI() {
      fetch(`${this.apiPath}`)
        .then((_) => {
          return _.json();
        })
        .then((_) => {
          this.properties = _;
        });
    },
    async copy(text) {
      copyToClipboard(text)
        .then(() => {
          // this.copied = true;
          // clearTimeout(this.timer);
          // setTimeout(() => {
          //   this.copied = false;
          //   this.timer = null;
          // }, 1000);
        })
        .catch(() => {});
    },
  },
};
</script>
