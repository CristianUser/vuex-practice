<template>
  <div class="main">
    <form action="" @submit="addTodo">
      <TextBox class="input" type="text" v-model="newTodo"></TextBox>
      <Button type="submit" @click="addTodo">Add</Button>
    </form>
    <ul>
      <todo-item v-for="(todo, index) in list" :index="index"  :key="index" :text="todo.text" :actions="actions"></todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem';
import EditTodo from './EditTodo';
import { TextBox, Button } from './ui';


export default {
  name: 'TodoList',
  data () {
    return {
      todos: [],
      newTodo: '',
      actions: [
        {
          text: 'delete',
          fn: (index) => {
            this.$store.commit('DELETE_TODO', {
              index
            });
          }
        },
        {
          text: 'edit',
          fn: (index) => {
            this.$store.dispatch('openModal', {
              type: EditTodo,
              data: {
                index
              },
              config:{
                title: 'Edit Something'
              }
            });
          }
        }
      ]
    }
  },
  methods: {
    addTodo() {
      this.$store.dispatch('addTodo', {
        id: this.newTodo,
        text: this.newTodo
      })
      this.newTodo = '';
    }
  },
  computed: {
    list() {
      return this.$store.getters.getTodoList;
    }
  },
  components:{
    'todo-item': TodoItem,
    TextBox,
    Button
  }
}
</script>

<style scoped>
  .main {
    border: solid #909090 1px;
    border-radius: 5px;
    margin: auto;
    padding: 20px;
    width: 400px;

  }
 .input{
   padding: 5px 10px;
   border: solid #909090 1px;
   border-radius: 5px;
   margin: 5px;
   font-size: 18px;
 }

 .add-button {
   padding: 7px 10px;
   border: solid #909090 1px;
   border-radius: 5px;
   font-size: 16px;
   font-weight: 300;
   margin: 5px;
 }

 ul {
   padding: 0;
 }
</style>
