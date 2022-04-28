<template>
  <div class="content">
    <LectureCreation :lectureId="lectureId"></LectureCreation>
    <div class="container bg-light">
      <div class="page-header">
        <h2>Vorlesung</h2>
        <button
          @click="lectureId = ''"
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
      this.store.removeLecture(id);
    },
  },
};
</script>
