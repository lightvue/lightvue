<script>
  export default {
    name: 'modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
     
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            <iframe width="600" height="300" src="https://www.youtube.com/embed/fjYPDdf4rGA?rel=0" title="LightVue introduction Video" frameborder="0"></iframe>
          </slot>

          <button
            type="button"
            class="btn-close"
            @click="$emit('close')"
          >
            x
          </button>
          <!-- <modal
      v-show="isModalVisible"
      @close="closeModal"
    /> -->
        </header>
      </div>
    </div>
  </transition>
</template>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999999;
  }

  .modal {
    background: #FFFFFF;
    /* box-shadow: 2px 2px 20px 1px; */
    background-color: transparent;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header {
    padding: 25px;
    display: flex;
  }

  .modal-header {
    position: relative;
    /* border-bottom: 1px solid #eeeeee; */
    color: #4AAE9B;
    justify-content: space-between;
  }

  .btn-close {
    position: absolute;
    top: -3%;
    right: 0%;
    border: none;
    font-size: 25px;
    padding: 10px;
    cursor: pointer;
    /* font-weight: bold; */
    color: #ffffff;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .8s ease;
  }
</style>