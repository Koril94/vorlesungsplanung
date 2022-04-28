
<template>
  <LectureDateCreation :lectureDateId="lectureDateId"></LectureDateCreation>
  <div class="container bg-light">
    <div class="page-header">
      <h2>Vorlesungstermine</h2>
      <button
        @click="lectureDateId = ''"
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#semesterControllerModal"
      >
        + Volresungstermin hinzufügen
      </button>
    </div>
    <DataTable
        @remove="removeLectureDate"
        @update="setLectureDateId"
        :data="data"
        :columns="columns"
      >
      </DataTable>
  </div>
</template>
<script>
import { store } from "../store";
import DataTable from "../components/DataTable.vue";
import LectureDateCreation from "../components/LectureDateCreation.vue";

export default {
  components: {
    DataTable,
    LectureDateCreation,
  },
  data() {
    return {
      store,
      lectureDateId: "",
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
   methods: {
    setLectureDateId(id) {
      this.lectureDateId = id;
    },
    removeLectureDate(id) {
      this.store.removeLectureDate(id);
    },
  },
};
</script>
