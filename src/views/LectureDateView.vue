<template>
  <div class="content">
    <LectureDateCreation :lectureDateId="lectureDateId"></LectureDateCreation>
    <div class="container bg-light">
      <div class="page-header">
        <h2>Vorlesungstermine</h2>
        <button
          @click="lectureDateId = ''"
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#semesterControllerModal"
        >
          + Volresungstermin hinzufügen
        </button>
      </div>
      <DataTable
        @remove="removeLectureDate"
        @update="setLectureDateId"
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
import LectureDateCreation from "../components/LectureDateCreation.vue";
function getData() {
  let lectureDates = Object.values(store.lectureDates).map((lectureDate) => {
    let newLectureDate = JSON.parse(JSON.stringify(lectureDate));
    newLectureDate.lecture = store.lectures[lectureDate.lecture].lectureName;
    newLectureDate.lecturer = store.lecturers[lectureDate.lecturer].lastName;
    newLectureDate.semester = store.semesters[lectureDate.semester].name;
    return newLectureDate;
  });
  return lectureDates;
}
export default {
  components: {
    DataTable,
    LectureDateCreation,
  },
  data() {
    return {
      store,
      lectureDateId: "",
      data: getData(),
      columns: [
        ["name", "Termin"],
        ["startDate", "Startzeit"],
        ["endDate", "Endzeit"],
        ["lecturer", "Dozent"],
        ["lecture", "Vorlesung"],
        ["semester", "Semester"],
      ],
    };
  },
  methods: {
    setLectureDateId(id) {
      this.lectureDateId = id;
    },
    removeLectureDate(id) {
      this.store.removeLectureDate(id);
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
