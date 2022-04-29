<template>
  <main class="row">
    <div class="col col-5 d-flex justify-content-between">
      <label>Von:</label>
      <p>{{ lectureDate.startDate }}</p>
    </div>
    <div class="col col-1"></div>
    <div class="col col-5 d-flex justify-content-between">
      <label>Bis:</label>
      <p>{{ lectureDate.endDate }}</p>
    </div>
    <div class="col col-12">
      <h5>{{ lectureDate.name }}</h5>
    </div>

    <div class="col col-6">
      <p>{{ lectureDate.lecture }}</p>
    </div>
    <div class="col col-6">
      <p>{{ lectureDate.lecturer }}</p>
    </div>
    <div class="col col-6">
      <p>{{ lectureDate.semester }}</p>
    </div>
  </main>
</template>

<script>
import { store } from "../store";
const emptyLectureDate = {
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
    lectureDateId: String,
  },
  data() {
    console.log(store.lectureDates);
    const lectureDate =
      this.lectureDateId in store.lectureDates
        ? store.lectureDates[this.lectureDateId]
        : JSON.parse(JSON.stringify(emptyLectureDate));

    console.log(store.lectureDates);
    return {
      store: store,
      lectureDate: lectureDate,
    };
  },
  watch: {
    lectureDateId(newLectureDateId, oldLectureDateId) {
      console.log(store.lectureDates);
      this.lectureDate =
        newLectureDateId in store.lectureDates
          ? store.lectureDates[newLectureDateId]
          : JSON.parse(JSON.stringify(emptyLectureDate));
      console.log(store.lectureDates);
    },
  },
};
</script>