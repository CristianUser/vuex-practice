<template>
  <input class="input" :value="value" :type="type" :autocomplete="autocomplete" @input="updateValue">
</template>

<script>
export default {
  props: ['value', 'type', 'autocomplete'],
  methods: {
    updateValue(e) {
      this.$emit('input', e.srcElement.value);
    },
  }
}
</script>

<style>
 .input{
   padding: 5px 10px;
   border: solid #909090 1px;
   border-radius: 5px;
   margin: 5px;
   font-size: 18px;
 }
</style>