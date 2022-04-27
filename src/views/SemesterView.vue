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
  <DataTable @update="setSemesterId" :data="data" :columns="columns"> </DataTable>
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
  methods: {
    setSemesterId(id) {
      console.log(id);
      this.semesterId = id;
    }
  },
  data() {
    return {
      semesterId: "",
      store: store,
      data: store.semesters,
      columns: [
        "name",
        "startDate",
        "endDate",
        "studyClass",
        "number"
      ],
    };
  },
};
</script>
