<template>
            <div class="form-group mb-6">
                <label for="title" class="form-label inline-block mb-2 text-gray-700 font-medium">Title:</label>
                <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-400 focus:outline-none" placeholder="Enter title" v-model="title">
            </div>

            <div class="form-group mb-6">
                <label for="description" class="form-label inline-block mb-2 text-gray-700 font-medium">Description:</label>
                <textarea class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-400 focus:outline-none" placeholder="Write description here..." v-model="description"></textarea>
            </div>

            <div class="dates">
                <div>
                    <label for="deadline" class="form-label text-gray-700 font-medium">Deadline:</label><br>
                    <input type="date" class="mt-2 text-gray-700 font-normal" v-model="deadline">
                </div>

                <div>
                    <label for="deadline" class="form-label text-gray-700 font-medium">Date Completed:</label><br>
                    <input type="date" class="mt-2 text-gray-700 font-normal" v-model="date_completed">
                </div>
            </div>

            

</template>

<script setup>

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