<template>
  <div class="container bg-light">
    <div class="page-header">
      <h2>Studienprogram</h2>
      
    </div>
      <DataTable
        @remove="removeStudyProgram"
        @update="updateStudyProgram"
        :data="data"
        :columns="columns"
      >
      </DataTable>
  </div>
</template>
<script>
import { store } from "../store";
import DataTable from "../components/DataTable.vue";

export default {
  setup() {},
  data() {
    return {
      data: store.studyPrograms,
      columns: ["name", "shortName"],
    };
  },
  components: {
    DataTable,
  },
};
</script>
