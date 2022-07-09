<template>
  <div class="api-table__wrap">
    <div class="api-table">
      <div class="api-table__header">
        <div class="api-table__cell">CSS class</div>
        <div class="api-table__cell">description</div>
        <div class="api-table__cell">properties</div>
      </div>
      <div v-for="property in properties" :key="property.class" class="api-table__row">
        <div class="api-table__cell --class-name">
          {{ property.class }}
          <div class="api-table__copy-btn" title="copy css class" @click="copy(property.class)">
            <i class="light-icon-copy"></i>
          </div>
        </div>
        <div class="api-table__cell">{{ property.description }}</div>
        <div class="api-table__cell --properties">
          {{ property.properties }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { copyToClipboard } from '../../utils';
export default {
  props: ['apiPath'],
  data() {
    return {
      properties: [
        {
          class: '.pl-btn',
          description: '',
          properties: '',
        },
        {
          class: '.pl-btn--1',
          description: '',
          properties: '',
        },
        {
          class: '.pl-btn--2',
          description: '',
          properties: '',
        },
        {
          class: '.pl-btn--3',
          description: '',
          properties: '',
        },
        {
          class: '.pl-btn--4',
          description: '',
          properties: '',
        },
        {
          class: '.pl-btn--5',
          description: '',
          properties: '',
        },
        {
          class: '.pl-btn--6',
          description: '',
          properties: '',
        },
        {
          class: '.pl-btn--7',
          description: '',
          properties: '',
        },
        {
          class: '.pl-btn--8',
          description: '',
          properties: '',
        },
        {
          class: '.pl-btn--rounded-1',
          description: '',
          properties: '',
        },
      ],
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
        .then(_ => {
          return _.json();
        })
        .then(_ => {
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

<style lang="scss">
.api-table__wrap {
  overflow-y: auto;
  // border-radius: 10px;
  &:first-child {
    border-radius: 10px 10px 0px 0px;
  }
  &:last-child {
    border-radius: 0px 0px 10px 10px;
  }
}
.api-table {
  display: table;
  width: 100%;
  // border: 1px solid #e7e7e7;
  background-color: #ffffff;
  border-radius: 4px;
  // box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.api-table__header,
.api-table__row {
  display: table-row;
  &:nth-child(odd) {
    background-color: #edf2f7;
  }
}
.api-table__header {
  background-color: #d7dfe8 !important;
  font-weight: 600;
  text-transform: capitalize;
  .api-table__cell {
    padding: 12px 8px;
  }
}
.api-table__cell {
  display: table-cell;
  padding: 8px;
  &.--class-name {
    color: #1c587a;
    font-weight: 100;
    font-family: monospace;
    white-space: nowrap;
  }
  &.--properties {
    color: #1c587a;
    font-weight: 100;
    font-family: monospace;
    white-space: nowrap;
  }
}
.api-table__copy-btn {
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  margin-left: 4px;
  opacity: 0.6;
  transform: scale(1);
  transition: all 0.3s;
  &:hover {
    opacity: 1;
    transform: scale(1.4);
  }
}
</style>
