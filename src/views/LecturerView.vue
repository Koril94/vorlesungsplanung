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
          + Dozenten hinzufügen
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
function getData() {
  let lecturers = Object.values(store.lecturers).map((lecturer) => {
    let newLecturer = JSON.parse(JSON.stringify(lecturer));
    newLecturer.studyProgram = store.studyPrograms[lecturer.studyProgram].name;
    return newLecturer;
  });
  return lecturers;
}
export default {
  setup() {},
  data() {
    let lecturers = getData();
    console.log(lecturers);
    return {
      store: store,
      lecturerId: "",
      data: lecturers,
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
  watch: {
    store: {
      handler() {
        let lecturers = getData();

        this.data = lecturers;
      },
      deep: true,
    },
  },
};
</script>
