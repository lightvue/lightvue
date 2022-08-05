<template>
  <docs-card title="APIs" description="All of the props, events and slots of the component are mentioned below:" :responsive="false" :showCardActions="false" id="docs-api">
    <DocsApiTableProps v-if="apiData.props && apiData.props.length" :props-list="apiData.props" id="docs-props" />
    <DocsApiTableEvents v-if="apiData.events && apiData.events.length" :events-list="apiData.events" id="docs-events" />
    <DocsApiTableSlots v-if="apiData.slots && apiData.slots.length" :slots-list="apiData.slots" id="docs-slots" />
  </docs-card>
</template>

<script>
import DocsCard from './DocsCard';
import DocsApiTableProps from './DocsApiTableProps';
import DocsApiTableSlots from './DocsApiTableSlots';
import DocsApiTableEvents from './DocsApiTableEvents.vue';

export default {
  components: {
    DocsCard,
    DocsApiTableProps,
    DocsApiTableSlots,
    DocsApiTableEvents,
  },
  props: {
    apiData: {
      required: true,
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
  border-radius: 10px;
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
  background-color: #607b89 !important;
  color: #ffffff;
  font-weight: 600;
  text-transform: capitalize;
  .api-table__cell {
    padding: 12px 12px;
    border-right: 1px solid #6b8897;
    &:last-child {
      border-right: none;
    }
  }
}
.api-table__cell {
  display: table-cell;
  border-right: 1px solid #e1e4e7;
  padding: 10px 12px;
  &:last-child {
    border-right: none;
  }
  &.--name {
    background-color: rgba(56, 178, 171, 0.05);
    width: 150px;
    font-weight: 600;
  }
  &.--type {
    color: #1c587a;
    font-weight: 100;
    font-family: monospace;
    white-space: nowrap;
    width: 120px;
  }
  &.--default {
    width: 120px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    padding-bottom: inherit;
  }
  &.--full-view {
    display: table-cell;
  }
  &.--params {
    width: 240px;
    .--param-item {
      white-space: nowrap;
    }
    .--param-type {
      color: #5f7a88;
      font-weight: 600;
      font-family: monospace;
    }
  }
}
.api-table {
  &.--events {
    .api-table__row .--name::before {
      content: '@';
      opacity: 0.7;
    }
  }
  &.--slots {
    .api-table__row .--name::before {
      content: '#';
      opacity: 0.7;
    }
  }
  &.--props {
    .api-table__row .--name::before {
      content: ':';
      opacity: 0.7;
    }
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
