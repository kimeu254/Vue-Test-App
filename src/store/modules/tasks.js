import axios from "axios"

const url = ('https://tychak.github.io/')

const state = {
    tasks: []
};

const getters = {
    allTasks: state => state.tasks
};

const actions = {
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
        try {
            const tasks = await axios.post(url, task)
            commit('NEW_TASK', tasks.data)
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
    }
    
};

const mutations = {
    SET_TASKS: (state, tasks) => state.tasks = tasks,
    NEW_TASK: (state, task) =>state.tasks.unshift(task),
}

export default {
    state, 
    getters, 
    actions, 
    mutations,
}