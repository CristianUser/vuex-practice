<template>
  <div class="main">
    <Modal/>
    <form action="" @submit="addTodo">
      <input class="input" type="text" v-model="newTodo">
      <button type="submit" class="add-button">Add</button>
    </form>
    <ul>
      <todo-item v-for="(todo, i) in list" :index="i"  :key="todo.id" :text="todo.text" :actions="actions"></todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem'
import Modal from './Modal'


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
          fn: () => {
            this.$store.dispatch('openModal', {
              title: 'Edit Something'
            });
          }
        }
      ]
    }
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
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
    Modal
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
