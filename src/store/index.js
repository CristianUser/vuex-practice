import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    modal: {
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
    OPEN_MODAL(state, config) {
      state.modal = {
        visible: true,
        config
      }
    },
    CLOSE_MODAL(state) {
      state.modal.visible = false;
    },
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
    }
  }
})
