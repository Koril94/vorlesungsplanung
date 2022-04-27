<template>Semester
 <semester-creation></semester-creation>

    <LectureDate 
    :data= "data"
    :columns= "columns">
  </LectureDate>
</template>
<script>
import { store } from "../store";
import SemesterCreation from "../components/SemesterCreation.vue";
import LectureDate from "../components/LectureDate.vue";
export default {
  components: {
    LectureDate,
    SemesterCreation
  },
  data() {
    return {
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