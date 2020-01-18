<template>
  <div class="sb-main">
    <span>is Here!</span>
  </div>
</template>

<script>
export default {
  name: 'snackbar',
  props: ['position', 'options']
}
</script>

<style>
  .sb-main {
    background-color: #282828;
    color: #fdfdfd;
    width: fit-content;
    padding: 5px 10px;
    border-radius: 5px;
    position: absolute;
    bottom: 30px;
    left: 30px;
  }
</style>