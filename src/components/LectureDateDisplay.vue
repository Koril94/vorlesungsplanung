<template>
  <main class="row">
    <div class="col col-5 d-flex justify-content-between">
      <label>Von:</label>
      <p>2022-02-12</p>
    </div>
    <div class="col col-1"></div>
    <div class="col col-5 d-flex justify-content-between">
      <label>Bis:</label>
      <p>2022-02-12</p>
    </div>
    <div class="col col-12">
      <h5>Vorlesung 123</h5>
    </div>
    <div class="col col-6"><p>Semester</p></div>

    <div class="col col-6"><p>Studiengang</p></div>
  </main>
</template>

<script>
import { store } from "../store";
const emptySemester = {
  name: "",
  number: null,
  startDate: null,
  endDate: null,
  studyClass: null,
  lectureDates: [],
};
export default {
  setup() {},
  props: {
    semesterId: String,
  },
  data() {
    const semester =
      this.semesterId in store.semesters
        ? store.semesters[this.semesterId]
        : JSON.parse(JSON.stringify(emptySemester));
    return {
      store: store,
      semester: semester,
    };
  },
  watch: {
    semesterId(newSemesterId, oldSemesterId) {
      this.semester =
        newSemesterId in store.semesters
          ? store.semesters[newSemesterId]
          : JSON.parse(JSON.stringify(emptySemester));
    },
  },
};
</script>