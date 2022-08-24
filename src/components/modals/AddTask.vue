<template>
    <div class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
          <!-- Modal content -->
          <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <!-- Modal header -->
            <div class="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                <h6 class="text-xl font-medium text-gray-900 dark:text-white">Add Task</h6>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" @click="$emit('close')">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <!-- Modal body -->
            <form action="" @submit.prevent="onSubmit">
              <div class="p-6 space-y-6">
                <div class="form-group mb-6">
                  <label for="title" class="form-label inline-block mb-2 text-gray-700 font-medium">Title:</label>
                  <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-400 focus:outline-none" placeholder="Enter title" v-model="task.title">
                </div>
                
                <div class="form-group mb-6">
                  <label for="description" class="form-label inline-block mb-2 text-gray-700 font-medium">Description:</label>
                  <textarea class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-400 focus:outline-none" placeholder="Write description here..." v-model="task.description"></textarea>
                </div>

                <div class="dates">
                  <div>
                    <label for="deadline" class="form-label text-gray-700 font-medium">Deadline:</label><br>
                    <input type="date" class="mt-2 text-gray-700 font-normal" v-model="task.deadline">
                  </div>

                  <div>
                    <label for="deadline" class="form-label text-gray-700 font-medium">Date Completed:</label><br>
                    <input type="date" class="mt-2 text-gray-700 font-normal" v-model="task.date_completed">
                  </div>
                </div>

              </div>
              <!-- Modal footer -->
              <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button type="submit" class="text-white bg-sky-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" name="button" @click="$emit('close')">Submit</button>
              </div>
            </form>
          </div>
            
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import * as yup from 'yup';

export default{
  setup() {
    const schema = yup.object({
      title: yup.string(),
      description: yup.string(),
      deadline: yup.date(),
      date_completed: yup.date(),
    });
    
    return {
      schema
    };
  },

  data() {
    return {
      task: {},
    }
  },

  computed: { ...mapGetters(["createdData"]) },

  methods: {
    ...mapActions(["addTask"]),
    onSubmit() {
      const { title, description, deadline, date_completed} = this.task;
      this.addTask({
        title: title,
        description: description,
        deadline: deadline,
        date_completed: date_completed,
      });
    },
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      return date;
    }
  },
}

</script>

<style scoped>

input[type=date] {
    border: 1px solid #c4c4c4;
    border-radius: 5px;  
    background-color: #fff;
    padding: 3px 5px;
    box-shadow: inset 0 3px 6px rgba(0,0,0,0.1);
}

input[type=date]:focus {
    outline: 0.1em solid rgb(38, 147, 236);
}
.dates {
    display: flex; 
    justify-content: space-between;
}

</style>