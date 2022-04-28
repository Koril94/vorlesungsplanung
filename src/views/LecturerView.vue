<template>
<DataTable
    @remove="removeLecturer"
    @update="updateLecturer"
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
      data: store.lecturers,
      columns: ["firstName", "lastName", "email", "studyProgram"],
    }
  },
  components: {
    DataTable
  }
};
</script>
