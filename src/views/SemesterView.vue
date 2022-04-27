<template>
  <SemesterCreation :semesterId="semesterId"></SemesterCreation>
  <button
    @click="semesterId = ''"
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#semesterControllerModal"
  >
    Add Semester
  </button>
  <LectureDate :data="data" :columns="columns"> </LectureDate>
</template>
<script>
import { store } from "../store";
import SemesterCreation from "../components/SemesterCreation.vue";
import LectureDate from "../components/LectureDate.vue";
export default {
  components: {
    LectureDate,
    SemesterCreation,
  },
  data() {
    return {
      semesterId: "semester1",
      store: store,
      data: store.lectureDates,
      columns: [
        "name",
        "startDate",
        "endDate",
        "lecturer",
        "lecture",
        "semester",
      ],
    };
  },
};
</script>
