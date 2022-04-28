<template>

<StudyClassCreation :studyClassId="studyClassId"></StudyClassCreation>
<button
    @click="studyClassId = ''"
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#semesterControllerModal"
  >
    Add study class
  </button>
<DataTable
    @remove="removeStudyClass"
    @update="setStudyClassId"
    :data="data"
    :columns="columns"
  >
  </DataTable>
</template>
<script>
import { store } from "../store";
import DataTable from "../components/DataTable.vue";
import StudyClassCreation from "../components/StudyClassCreation.vue"
export default {
  setup() {},
  components: {
    DataTable,
    StudyClassCreation
  },
  methods: {
    setStudyClassId(id) {
      this.studyClassId = id;
    },
    removeStudyClass(studyClassId) {
      delete this.store.studyClasses[studyClassId];
      Object.values(this.store.studyPrograms).forEach(studyProgram => studyProgram.studyClasses = studyProgram.studyClasses.filter(studyClass => studyClass !== studyClassId));
      
    },
  },
  data() {
    return {
      studyClassId : "",
      store: store,
      data: store.studyClasses,
      columns: ["name", "startDate", "endDate", "studyProgram"],
    };
  },
};
</script>
