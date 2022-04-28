<template>
<DataTable
    @remove="removeStudyClass"
    @update="updateStudyClass"
    :data="data"
    :columns="columns"
  >
  </DataTable>
</template>
<script>
import { store } from "../store";
import DataTable from "../components/DataTable.vue";

export default {
  setup() {},
  data() {
    return {
      data: store.studyClasses,
      columns: ["name", "startDate", "endDate", "studyProgram"],
    }
  },
  components: {
    DataTable
  }
};
</script>
