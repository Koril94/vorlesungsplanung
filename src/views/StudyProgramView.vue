<template>
  <div class="content">
    <StudyProgramCreation
      :studyProgramId="studyProgramId"
    ></StudyProgramCreation>
    <div class="container bg-light">
      <div class="page-header">
        <h2>Studiengang</h2>
        <button
          @click="studyProgramId = ''"
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#semesterControllerModal"
        >
          + Studiengang
        </button>
      </div>
      <DataTable
        @remove="removeStudyProgram"
        @update="setStudyProgramId"
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
import StudyProgramCreation from "../components/StudyProgramCreation.vue";

export default {
  setup() {},
  data() {
    return {
      studyProgramId: "",
      store,
      data: store.studyPrograms,
      columns: [["name", "Studiengang"], ["shortName","Abkürzung"]],
    };
  },
  components: {
    DataTable,
    StudyProgramCreation,
  },
  methods: {
    setStudyProgramId: function (id) {
      this.studyProgramId = id;
    },
    removeStudyProgram: function (id) {
      this.store.removeStudyProgram(id);
    },
  },
};
</script>
