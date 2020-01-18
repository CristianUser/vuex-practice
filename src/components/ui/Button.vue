<template>
  <button class="button" @click="onClick" :type="type" :disabled="disabled"> <slot></slot> </button>
</template>

<script>
export default {
  name: 'my-button',
  props: ['disabled', 'type'],
  methods: {
    onClick(e) {
      e.preventDefault();
      this.$emit('click');
    }
  }
}
</script>

<style>
 .button {
    padding: 7px 10px;
    border: solid #909090 1px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 300;
    margin: 5px;
 }
</style>