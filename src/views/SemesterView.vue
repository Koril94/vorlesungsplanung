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
  <DataTable
    @remove="removeSemester"
    @update="setSemesterId"
    :data="data"
    :columns="columns"
  >
  </DataTable>
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
      this.semesterId = id;
    },
    removeSemester(id) {
      delete this.store.semesters[id];
      Object.values(this.store.studyClasses)
        .filter((studyClass) => studyClass.semesters.includes(id))
        .forEach(
          (studyClass) =>
            (studyClass.semesters = studyClass.semesters.filter(
              (semester) => semester !== id
            ))
        );
      Object.entries(this.store.lectureDates)
        .filter(([key, value]) => value.semester !== id)
        .forEach(([key, value]) => {
          this.store.lectureDates[key] = value;
        });
    },
  },
  data() {
    return {
      semesterId: "",
      store: store,
      data: store.semesters,
      columns: ["name", "startDate", "endDate", "studyClass", "number"],
    };
  },
};
</script>
