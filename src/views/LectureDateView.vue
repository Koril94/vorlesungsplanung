<script>
import { store } from "../store";
import LectureDate from "../components/LectureDate.vue";
export default {
  components: {
    LectureDate,
  },
  data() {
    return {
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
  <template>
    <LectureDate 
    :data= "data"
    :columns= "columns">
  </LectureDate>

  </template>
  
