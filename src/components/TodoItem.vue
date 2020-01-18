<template>
  <li class="item">
    {{text}}
    <button class="action-btn" 
      v-for="(action, i) in actions" 
      :key="i" 
      @click="(event) => { action.fn(index) }"
      >{{action.text}}</button>
    </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['index', 'text', 'actions']
}
</script>

<style scoped>
  li.item {
    list-style: none;
    padding: 0 15px;
    border-bottom: solid #909090 1px;
    background-color: #f9f9f9;
  }

  .action-btn {
   border: solid #909090 1px;
   border-radius: 5px;
   font-weight: 300;
   margin: 0 15px;
  }
</style>