<template>
  <div class="content">
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
      columns: [
        ["firstName", "Vorname"],
        ["lastName", "Nachname"],
        ["email", "Email"],
        ["studyProgram", "Studiengang"],
      ],
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
