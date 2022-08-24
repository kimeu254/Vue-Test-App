<template>
    <div class="overflow-auto rounded-lg shadow hidden lg:block">
        <table class="w-full">
            <thead class="bg-gray-50 border-b-2 border-gray-200 ">
                <tr>
                    <th class="w-12 p-3 text-sm font-semibold tracking-wide text-left">ID</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Title</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Description</th>
                    <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">Date Added</th>
                    <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">Deadline</th>
                    <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">Date Completed</th>
                    <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">Status</th>
                    <th class="w-32 p-3 text-sm font-semibold tracking-wide text-center">Actions</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-100" >
                <tr class="bg-white" v-for='task in tasks' :key='task.id'>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ task.id }}</td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ task.title }}</td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ task.description }}</td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ task.date_added }}</td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ task.deadline }}</td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{{ task.date_completed }}</td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap"><span class="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-700 bg-green-700 rounded-lg bg-opacity-50">Complete</span></td>
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div class="flex items-center space-x-2">
                        <input type="checkbox" class="accent-green-700 w-6 h-6">
                        <img src="../icons/edit.svg" alt="edit-icon" class="w-6 h-6 cursor-pointer" @click="showEditModal = true">
                        <img src="../icons/delete.svg" alt="delete-icon" class="w-6 h-6 cursor-pointer" @click="showDeleteModal = true">
                    </div>
                </td>
                </tr>
            </tbody>
        </table>
    </div>

        <delete-task class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50" v-show="showDeleteModal" @close-delete="showDeleteModal = false"/>
        <edit-task class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50" v-show="showEditModal" @close-edit="showEditModal = false"/>

    <!-- Mobile View -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
        <div class="bg-white space-y-3 p-4 rounded-lg shadow" v-for='task in tasks' :key='task.id'>
            <div class="flex items-center space-x-2 text-sm">
                <div>{{ task.title }}</div>
                <div>Date</div>
                <div>Status</div>
            </div>
            <div>{{ task.description }}</div>
            <div>Due</div>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import {useStore} from 'vuex'
import DeleteTask from '../modals/DeleteTask.vue';
import EditTask from '../modals/EditTask.vue';

const showDeleteModal = ref(false)
const showEditModal = ref(false)
const store = useStore();
const tasks = computed(() => {
  return store.state.tasks
})

onMounted(() => {
  store.dispatch("fetchTasks");
})
</script>

<style scoped>

</style>