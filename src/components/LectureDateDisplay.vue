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
      <h5>{{ store.lectures[lectureDate.lecture].lectureName }}</h5>
    </div>

    <div class="col col-6">
      <p>{{ lectureDate.name }}</p>
    </div>
    <div class="col col-6">
      <p>
        {{ store.lecturers[lectureDate.lecturer].firstName }}
        {{ store.lecturers[lectureDate.lecturer].lastName }}
      </p>
    </div>
    <div class="col col-6">
      <p>{{ store.semesters[lectureDate.semester].name }}</p>
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
    const lectureDate =
      this.lectureDateId in store.lectureDates
        ? store.lectureDates[this.lectureDateId]
        : JSON.parse(JSON.stringify(emptyLectureDate));

    return {
      store: store,
      lectureDate: lectureDate,
    };
  },
  watch: {
    store: {
      handler() {
        this.data = getData();
      },
      deep: true,
    },
    lectureDateId(newLectureDateId, oldLectureDateId) {
      this.lectureDate =
        newLectureDateId in store.lectureDates
          ? store.lectureDates[newLectureDateId]
          : JSON.parse(JSON.stringify(emptyLectureDate));
    },
  },
};
</script>
