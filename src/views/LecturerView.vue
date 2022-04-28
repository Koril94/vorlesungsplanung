<template>
  <LecturerCreation :lecturerId="lecturerId"></LecturerCreation>
  <button
    @click="lecturerId = ''"
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#semesterControllerModal"
  >
    Add Lecturer
  </button>
  <DataTable
    @remove="removeLecturer"
    @update="setLecturerId"
    :data="data"
    :columns="columns"
  >
  </DataTable>
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
      delete this.store.lecturers[id];

      Object.values(this.store.lectures)
        .filter((lecture) => lecture.lecturers.includes(id))
        .forEach(
          (lecture) =>
            (lecture.lecturers = lecture.lecturers.filter(
              (lecturerId) => lecturerId !== id
            ))
        );
      Object.values(this.store.studyPrograms)
        .filter((studyProgram) => studyProgram.lecturers.includes(id))
        .forEach(
          (studyProgram) =>
            (studyProgram.lecturers = studyProgram.lecturers.filter(
              (lecturerId) => lecturerId !== id
            ))
        );
    },
  },
};
</script>
