import { createStore } from "vuex";
import axios from "axios"

const url = ('https://tychak.github.io/')

export default createStore({
  state: {
    tasks: [],
    createdData: null,
  },
  getters: {
    getTasks: (state) => state.tasks,
    createdData: (state) => state.createdData,
  },
  mutations: {
    SET_TASKS(state, tasks) {
      state.tasks = tasks
    },
    NEW_TASK: (state, task) => {
      state.tasks.unshift(task)
      state.createdData = task;
    },
  },
  actions: {
    async fetchTasks({commit}) {
      try {
        const tasks = await axios.get(url)
        commit('SET_TASKS', tasks.data) 
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    },

    async addTask({commit}, task) {
      await axios.post(url, task)
      .then(res => {
        commit('NEW_TASK', res.data.data)
      }).catch(err => {
        console.log('error', err)
      });
    }
  },
  modules: {},
});
