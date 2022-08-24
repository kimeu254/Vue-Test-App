<template>
    <TabsWrapper class="flex justify-center">
        <Tab title="All" :isActive="activeTab === 'tab1'" @click="clickTab('tab1')"/>
        <Tab title="In Progress" :isActive="activeTab === 'tab2'" @click="clickTab('tab2')" />
        <Tab title="Complete" :isActive="activeTab === 'tab3'" @click="clickTab('tab3')" />
    </TabsWrapper>
    <TabsContent>
        <div v-if="activeTab === 'tab1'">
            <Table />
        </div>
        <div v-if="activeTab === 'tab2'">
        Aspernatur cupiditate, dolorum earum eius ex facilis!
        </div>
        <div v-if="activeTab === 'tab3'">
        Deserunt ducimus explicabo facere ipsam.
        </div>
    </TabsContent>
</template>

<script>
import {TabsWrapper, TabsContent, Tab} from '@ocrv/vue-tailwind-tabs'
import Table from '../table/Table.vue';


export default {
    components: {
        TabsWrapper,
        TabsContent,
        Tab, 
        Table,
    },
    data() {
        return {
            activeTab: 'tab1'
        }
    },
    methods: {
        clickTab(name) {
            this.activeTab = name
        }
    }
}
</script>

<style scoped>

</style>