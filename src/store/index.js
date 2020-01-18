import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    modal: {
      data: null,
      type: null,
      config: {
        title: ''
      },
      visible: false
    }
  },
  getters: {
    getTodoList(state) {
      return state.todos
    },
    modalState(state) {
      return state.modal.visible
    },
    modalConfig(state) {
      return state.modal.config
    }
  },
  mutations: {
    ADD_TODO(state, payload) {
      state.todos.push(payload);
    },
    DELETE_TODO(state, { index }) {
      state.todos = state.todos.filter((val, i)=> i !== index);
    },
    UPDATE_TODO(state, { index, text }) {
      state.todos[index].text = text;
    },
    OPEN_MODAL(state, {config, data, type}) {
      state.modal = {
        visible: true,
        config,
        data,
        type
      }
    },
    CLOSE_MODAL(state) {
      state.modal.visible = false;
    },
    RESET_MODAL(state) {
      state.modal = {
        data: null,
        type: null,
        config: {
          title: ''
        }
      }
    }
  },
  actions: {
    addTodo({commit}, item) {
      commit('ADD_TODO', item);
    },
    openModal({commit}, payload) {
      commit('OPEN_MODAL', payload);
    },
    closeModal({commit}) {
      commit('CLOSE_MODAL');
    },
    updateTodoItem({commit}, payload) {
      commit('CLOSE_MODAL', payload);
      commit('RESET_MODAL');
    }
  }
})
