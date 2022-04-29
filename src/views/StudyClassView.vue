<template>
  <div class="content">
    <div class="container bg-light">
      <div class="page-header">
        <h2>Studienjahrgang</h2>
        <button
          @click="studyClassId = ''"
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#semesterControllerModal"
        >
          + Studienjahrgang
        </button>
      </div>
      <StudyClassCreation :studyClassId="studyClassId"></StudyClassCreation>
      <DataTable
        @remove="removeStudyClass"
        @update="setStudyClassId"
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
import StudyClassCreation from "../components/StudyClassCreation.vue";
export default {
  setup() {},
  components: {
    DataTable,
    StudyClassCreation,
  },
  methods: {
    setStudyClassId(id) {
      this.studyClassId = id;
    },
    removeStudyClass(studyClassId) {
      delete this.store.studyClasses[studyClassId];
      Object.values(this.store.studyPrograms).forEach(
        (studyProgram) =>
          (studyProgram.studyClasses = studyProgram.studyClasses.filter(
            (studyClass) => studyClass !== studyClassId
          ))
      );
    },
  },
  data() {
    return {
      studyClassId: "",
      store: store,
      data: store.studyClasses,
      columns: [
        ["name", "Studienjahrgang"],
        ["startDate", "Begin Datum"],
        ["endDate", "End Datum"],
        ["studyProgram", "Studiengang"],
      ],
    };
  },
};
</script>
