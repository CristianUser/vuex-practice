<template>
  <div id="app">
    <Modal/>
    <SnackBar/>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TodoList/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import TodoList from './components/TodoList.vue';
import { Modal, SnackBar } from './components/ui';

export default {
  name: 'app',
  components: {
    HelloWorld,
    TodoList,
    Modal,
    SnackBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
