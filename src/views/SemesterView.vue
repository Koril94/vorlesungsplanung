<template>
  <div class="content">
    <SemesterCreation :semesterId="semesterId"></SemesterCreation>
    <div class="container bg-light">
      <div class="page-header">
        <h2>Semester</h2>
        <button
          @click="semesterId = ''"
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#semesterControllerModal"
        >
          + Semester
          hinzufügen
        </button>
      </div>
      <DataTable
        @remove="removeSemester"
        @update="setSemesterId"
        :data="data"
        :columns="columns"
      >
      </DataTable>
    </div>
  </div>
</template>
<script>
import { store } from "../store";
import SemesterCreation from "../components/SemesterCreation.vue";
import DataTable from "../components/DataTable.vue";
function getData() {
  let semesters = Object.values(store.semesters).map((semester) => {
    let newSemester = JSON.parse(JSON.stringify(semester));
    newSemester.studyClass = store.studyClasses[semester.studyClass].name;
    return newSemester;
  });
  return semesters;
}
export default {
  components: {
    DataTable,
    SemesterCreation,
  },
  methods: {
    setSemesterId(id) {
      this.semesterId = id;
    },
    removeSemester(id) {
      this.store.removeSemester(id);
    },
  },
  data() {
    return {
      semesterId: "",
      store: store,
      data: getData(),
      columns: [
        ["name", "Semester"],
        ["startDate", "Semesterbegin"],
        ["endDate", "Semesterende"],
        ["studyClass", "Studienjahrgang"],
        ["number", "Nummer"],
      ],
    };
  },
  watch: {
    store: {
      handler() {
        this.data = getData();
      },
      deep: true,
    },
  },
};
</script>
