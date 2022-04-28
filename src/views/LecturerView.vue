<template>
  <LecturerCreation :lecturerId="lecturerId"></LecturerCreation>

  <div class="container bg-light">
    <div class="page-header">
      <h2>Dozenten</h2>
      <button
        @click="lecturerId = ''"
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#semesterControllerModal"
      >
        + Donzenten hinzufügen
      </button>
    </div>
    <DataTable
      @remove="removeLecturer"
      @update="setLecturerId"
      :data="data"
      :columns="columns"
    >
    </DataTable>
  </div>
</template>
<script>
import { store } from "../store";
import DataTable from "../components/DataTable.vue";
import LecturerCreation from "../components/LecturerCreation.vue";
export default {
  setup() {},
  data() {
    return {
      store: store,
      lecturerId: "",
      data: store.lecturers,
      columns: ["firstName", "lastName", "email", "studyProgram"],
    };
  },
  components: {
    DataTable,
    LecturerCreation,
  },
  methods: {
    setLecturerId: function (id) {
      this.lecturerId = id;
    },
    removeLecturer: function (id) {
      this.store.removeLecturer(id);
    },
  },
};
</script>
