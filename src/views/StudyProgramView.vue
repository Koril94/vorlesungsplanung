<template>
<DataTable
    @remove="removeStudyProgram"
    @update="updateStudyProgram"
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
      data: store.studyPrograms,
      columns: ["name", "shortName"],
    }
  },
  components: {
    DataTable
  }
};
</script>