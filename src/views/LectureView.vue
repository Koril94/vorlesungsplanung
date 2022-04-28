<template>
  <LectureCreation :lectureId="lectureId"></LectureCreation>
  <div class="container bg-light">
    <div class="page-header">
      <h2>Vorlesung</h2>
      <button
        @click="lecturId = ''"
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#semesterControllerModal"
      >
        + Vorlesung hinzufügen
      </button>
    </div>
    <DataTable
      @remove="removeLecture"
      @update="setLectureId"
      :data="data"
      :columns="columns"
    >
    </DataTable>
  </div>
</template>
<script>
import { store } from "../store";
import DataTable from "../components/DataTable.vue";
import LectureCreation from "../components/LectureCreation.vue";

export default {
  setup() {},
  data() {
    return {
      store,
      lectureId: "",
      data: store.lectures,
      columns: ["lectureName", "moduleName", "Duration", "studyProgram"],
    };
  },
  components: {
    DataTable,
    LectureCreation,
  },
  methods: {
    setLectureId: function (id) {
      this.lectureId = id;
    },
    removeLecture: function (id) {
      delete this.store.lectures[id];

      Object.values(this.store.lecturers).forEach(lecturer => lecturer.lectures = lecturer.lectures.filter(lectureId => lectureId !== id));
      Object.values(this.store.studyPrograms).forEach(studyProgram => studyProgram.lectures = studyProgram.lectures.filter(lectureId => lectureId !== id));
      let lectureDates = {};
      Object.values(this.store.lectureDates).filter(lectureDate => lectureDate.lecture !== id).forEach(lectureDate => lectureDates[lectureDate.id] = lectureDate);
      this.store.lectureDates = lectureDates;
    },
  },
};
</script>
