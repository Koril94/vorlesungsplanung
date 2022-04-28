<template>
  <div class="container bg-light">
    <div class="page-header">
      <h2>Vorlesung</h2>
    </div>
    <DataTable
      @remove="removeLecture"
      @update="updateLecture"
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
      data: store.lectures,
      columns: ["lectureName", "moduleName", "Duration", "studyProgram"],
    };
  },
  components: {
    DataTable,
  },
};
</script>
