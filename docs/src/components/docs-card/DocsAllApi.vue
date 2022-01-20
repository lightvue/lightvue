<template>
  <docs-card title="APIs" :responsive="false" id="docs-api">
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
}
.api-table {
  display: table;
  width: 100%;
  border: 1px solid var(--api-table-border-color);
  background-color: var(--api-table-bg-color);
  border-radius: 4px;
  box-shadow: var(--api-table-shadow);
  color: var(--text-color);
}
.api-table__header,
.api-table__row {
  display: table-row;
  &:nth-child(odd) {
    background-color: var(--api-table-odd-row);
  }
}
.api-table__header {
  background-color: var(--api-table-header-bg) !important;
  font-weight: 600;
  color: #fff;
  text-transform: capitalize;
  .api-table__cell {
    padding: 12px 12px;
    border-right: 1px solid var(--api-table-border-color);
  }
}
.api-table__cell {
  display: table-cell;
  border-right: 1px solid var(--api-table-border-color);
  padding: 10px 12px;
  &.--name {
    background-color: rgba(56, 178, 171, 0.05);
    width: 150px;
    font-weight: 600;
  }
  &.--type {
    color: var(--api-table-highlight-text);
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
