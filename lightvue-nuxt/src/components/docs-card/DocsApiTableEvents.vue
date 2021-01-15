<template>
  <div class="api-table__wrap">
    <div class="api-table --events">
      <div class="api-table__header">
        <div class="api-table__cell --name">Events</div>
        <div class="api-table__cell">Parameters</div>
        <div class="api-table__cell">Description</div>
      </div>
      <div
        class="api-table__row"
        v-for="event in eventsList"
        :key="event.name"
      >
        <div class="api-table__cell --name">{{ event.name }}</div>
        <div class="api-table__cell --params">
            <span class="--param-item" v-for="(param,i) in event.params" :key="param.name" :title="param.description">
                {{param.name}}:&nbsp;
                <span class="--param-type">{{param.type}}</span>
                <span v-if="i !== event.params.length -1">,&nbsp;</span>
            </span>
        </div>
        <div class="api-table__cell --description">
          {{ event.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["eventsList"],
};
</script>

