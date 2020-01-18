<template>
  <div class="et-main">
    <form action="">
      <TextBox type="text" v-model="editingTodo.text"></TextBox>
      <Button @click="saveTodo">Save</Button>
    </form>
  </div>
</template>

<script>
import { TextBox, Button } from './ui';

export default {
  data() {
    return {

    }
  },
  computed: {
    editingTodo() {
      return this.$store.state.todos[this.modalData.index];
    },
    modalData() {
      return this.$store.state.modal.data;
    }
  },
  methods: {
    saveTodo() {
      this.$store.dispatch('updateTodoItem', {
        index: this.modalData.index,
        text: this.editingTodo.text
      })
    }
  },
  components: {
    TextBox,
    Button
  }
}
</script>

<style lang="scss" scoped>
.et-main {
  margin: 5px;
  margin-top: 20px;
}

</style>