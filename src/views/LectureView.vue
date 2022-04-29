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
function getData() {
let lectures = Object.values(store.lectures).map((lecture) => {
      let newLecture = JSON.parse(JSON.stringify(lecture));
      newLecture.studyProgram = store.studyPrograms[lecture.studyProgram].name;
      newLecture.lecturer = store.lecturers[lecture.lecturers[0]].lastName;
      return newLecture;
    });
    return lectures
}
export default {
  setup() {},
  data() {
    

    return {
      store,
      lectureId: "",
      data: getData(),
      columns: [
        ["lectureName", "Vorlesung"],
        ["moduleName", "Modul"],
        ["Duration", "Dauer"],
        ["studyProgram", "Studiengang"],
        ["lecturer", "Dozent"]
      ],
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
