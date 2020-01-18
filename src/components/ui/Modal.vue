<template>
<div v-if="modalVisibility">

  <div class="main">
    <div class="modal">
      <div class="modal-header">
        <h3 class="modal-title">{{config.title}}</h3>
        <button @click="closeModal" class="close-btn">X</button>
      </div>
      <component :is="modal.type"></component>
      </div>
  </div>
  <div class="backdrop"></div>
</div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      visibility: false
    }
  },
  methods: {
    openModal() {
      this.visibility = true;
    },
    closeModal() {
      this.$store.dispatch('closeModal');
    }
  },
  computed: {
    modalVisibility() {
      return this.$store.getters.modalState;
    },
    config() {
      return this.$store.getters.modalConfig;
    },
    modal() {
      return this.$store.state.modal;
    }
  }
}
</script>

<style lang="scss" scoped>
 .main {
  position: absolute;
  border: solid #909090 1px;
  border-radius: 5px;
  margin: auto;
  padding: 20px;
  max-width: 500px;
  max-height: 400px;
  z-index: 99;
  background-color: #fdfdfd;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;

  .modal {
    z-index: 99;
  }

  .modal-header {
    border-bottom: solid #909090 1px;
    background-color: #f9f9f9;

    .modal-title {
      display: inline;
    }
    .close-btn {
      position: absolute;
      right: 30px;
      top: 24px;
      border: 0;
      background-color: transparent;
    }
  }
 }

  .backdrop {
    background-color: rgba(33, 38, 49, 0.5);
    bottom: 0;
    left: 0;
    opacity: 1;
    position: fixed;
    right: 0;
    top: 0;
    transition: 0.2s all;
    visibility: visible;
    z-index: 89;
  }
</style>