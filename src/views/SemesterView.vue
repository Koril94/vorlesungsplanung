<template>
  <SemesterCreation :semesterId="semesterId"></SemesterCreation>
  <button
    @click="semesterId = ''"
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#semesterControllerModal"
  >
    Add Semester
  </button>
  <DataTable :data="data" :columns="columns"> </DataTable>
</template>
<script>
import { store } from "../store";
import SemesterCreation from "../components/SemesterCreation.vue";
import DataTable from "../components/DataTable.vue";
export default {
  components: {
    DataTable,
    SemesterCreation,
  },
  data() {
    return {
      semesterId: "semester1",
      store: store,
      data: store.lectureDates,
      columns: [
        "name",
        "startDate",
        "endDate",
        "lecturer",
        "lecture",
        "semester",
      ],
    };
  },
};
</script>
