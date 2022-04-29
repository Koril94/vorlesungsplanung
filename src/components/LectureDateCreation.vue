<template>
  <!-- Button trigger modal -->
  <!-- Modal -->
  <div
    class="modal fade"
    id="semesterControllerModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Neuer Vorlesungstermin
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body px-4">
          <form class="row g-3">
            <div class="col-md-12">
              <label for="name" class="form-label">Name</label>
              <input
                v-model="lectureDate.name"
                type="text"
                class="form-control"
                id="name"
              />
            </div>
            <div class="col-12">
              <label for="startDate" class="form-label">Start date</label>
              <input
                type="date"
                class="form-control"
                id="startDate"
                placeholder="2022-12-12"
                v-model="lectureDate.startDate"
              />
            </div>
            <div class="col-12">
              <label for="endDate" class="form-label">End date</label>
              <input
                type="date"
                class="form-control"
                id="endDate"
                v-model="lectureDate.endDate"
              />
            </div>
            <div class="col-md-12">
              <label for="lecture" class="form-label">Vorlesung</label>
              <select
                v-model="lectureDate.lecture"
                id="lecture"
                class="form-select"
              >
                <option
                  v-for="lecture in store.lectures"
                  v-bind:key="lecture.id"
                  v-bind:value="lecture.id"
                >
                  {{ lecture.lectureName }}
                </option>
              </select>
            </div>
            <div class="col-md-12">
              <label for="lecturer" class="form-label">Dozent</label>
              <select
                v-model="lectureDate.lecturer"
                id="lecturer"
                class="form-select"
              >
                <option
                  v-for="lecturer in store.lecturers"
                  v-bind:key="lecturer.id"
                  v-bind:value="lecturer.id"
                >
                  {{ lecturer.firstName }} {{ lecturer.lastName }}
                </option>
              </select>
            </div>
            <div class="col-md-12">
              <label for="semester" class="form-label">Semester</label>
              <select
                v-model="lectureDate.semester"
                id="semester"
                class="form-select"
              >
                <option
                  v-for="semester in store.semesters"
                  v-bind:key="semester.id"
                  v-bind:value="semester.id"
                >
                  {{ semester.name }}
                </option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer px-3">
          <button type="button" @click="create" class="btn btn-primary">
            Termin erstellen
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  </div>
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
  mounted() {
    let button = document.querySelector('.modal-footer > button.btn-primary');
    console.log(button);
    button.addEventListener('click', function () {
      let modale = document.querySelector('#semesterControllerModal');
      console.log(modale);
      var modal = bootstrap.Modal.getInstance(modale)
      modal.hide();
    })
  },
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
    lectureDateId(newLectureDateId, oldLectureDateId) {
      this.lectureDate =
        newLectureDateId in store.lectureDates
          ? store.lectureDates[newLectureDateId]
          : JSON.parse(JSON.stringify(emptyLectureDate));
    },
  },
  methods: {
    create: function () {
      const isUpdate = this.lectureDateId in store.lectureDates;
      const currentLectureDates = Object.entries(store.lectureDates).length;
      const lectureDateId = isUpdate
        ? this.lectureDateId
        : `lectureDate${currentLectureDates + 1}`;
      this.lectureDate.id = lectureDateId;
      let newLectureDate = JSON.parse(JSON.stringify(this.lectureDate));

      let lectureLecdates = store.lectures[newLectureDate.lecture].lectureDates;
      if (!lectureLecdates.includes(lectureDateId))
        lectureLecdates.push(lectureDateId);

      let lecturerLecdates =
        store.lecturers[newLectureDate.lecturer].lectureDates;
      if (!lecturerLecdates.includes(lectureDateId))
        lecturerLecdates.push(lectureDateId);

      let semesterLecDates =
        store.semesters[newLectureDate.semester].lectureDates;
      if (!semesterLecDates.includes(lectureDateId))
        semesterLecDates.push(lectureDateId);

      store.lectureDates[lectureDateId] = newLectureDate;
      this.lectureDate = isUpdate
        ? newLectureDate
        : JSON.parse(JSON.stringify(emptyLectureDate));
    },
  },
};
</script>

<style>
h1 {
  color: cyan;
}
</style>
