<script setup>
import { ref } from "vue";
import Table from "../components/table/Table.vue";
import AddTask from "../components/modals/AddTask.vue";

const showTaskModal = ref(false)


</script>

<template>
  <main class="p-5">
    <div class="flex justify-center">
      <h3 class="text-xl text-sky-500">To-Do List</h3>
    </div>
    <div class="mt-3">
      <div class="flex justify-end">
        <button class="text-white bg-sky-500 hover:bg-blue-500 rounded py-2 px-4 font-bold" @click="showTaskModal = true">&#43; Add Task</button>
      </div>
      <div class="my-3">
        <Table/>
      </div>
    </div>
    <AddTask class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50" v-show="showTaskModal" @close="showTaskModal = false"/>
  </main>
</template>

