// import Vue from 'vue';

// const EventBus = new Vue();
// export default EventBus;

import { pubSub } from 'lightvue/utils';

const bus = pubSub();
export default bus;
