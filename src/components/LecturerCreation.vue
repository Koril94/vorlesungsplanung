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
          <h5 class="modal-title" id="exampleModalLabel">New Lecturer</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body px-4">
          <form class="row g-3">
            <div class="col-md-6">
              <label for="firstName" class="form-label">First name</label>
              <input
                v-model="lecturer.firstName"
                type="text"
                class="form-control"
                id="firstName"
              />
            </div>
            <div class="col-md-6">
              <label for="lastName" class="form-label">Last name</label>
              <input
                v-model="lecturer.lastName"
                type="text"
                class="form-control"
                id="lastName"
              />
            </div>
            <div class="col-12">
              <label for="email" class="form-label">E-Mail</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="lecturer.email"
              />
            </div>
            <div class="col-12">
              <label for="studyProgram" class="form-label">Study Program</label>
              <select
                v-model="lecturer.studyProgram"
                id="studyClass"
                class="form-select"
              >
                <option
                  v-for="studyProgram in store.studyPrograms"
                  v-bind:key="studyProgram.id"
                  v-bind:value="studyProgram.id"
                >
                  {{ studyProgram.name }}
                </option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer px-3">
          <button type="button" @click="create" class="btn btn-primary">
            Add lecturer
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
const emptyLecturer = {
  id: null,
  firstName: null,
  lastName: null,
  email: null,
  lectureDates: [],
  lectures: [],
  studyProgram: null,
};
export default {
  setup() {},
  props: {
    lecturerId: String,
  },
  data() {
    const lecturer =
      this.lecturerId in store.lecturers
        ? store.lecturers[this.lecturerId]
        : JSON.parse(JSON.stringify(emptyLecturer));
    return {
      store: store,
      lecturer: lecturer,
    };
  },
  watch: {
    lecturerId(newLecturerId, oldLecturerId) {
      this.lecturer =
        newLecturerId in store.lecturers
          ? store.lecturers[newLecturerId]
          : JSON.parse(JSON.stringify(emptyLecturer));
    },
  },
  methods: {
    create: function () {
      const isUpdate = this.lecturerId in store.lecturers;
      const currentLecturersAmount = Object.entries(store.lecturers).length;
      const lecturerId = isUpdate
        ? this.lecturerId
        : `lecturer${currentLecturersAmount + 1}`;
      this.lecturer.id = lecturerId;
      let newLecturer = JSON.parse(JSON.stringify(this.lecturer));

      let programLecturers =
        store.studyPrograms[newLecturer.studyProgram].lecturers;
      if (!programLecturers.includes(lecturerId))
        programLecturers.push(lecturerId);

      store.lecturers[lecturerId] = newLecturer;
      this.lecturer = isUpdate
        ? newLecturer
        : JSON.parse(JSON.stringify(emptyLecturer));
      console.log(this.lecturer);
    },
  },
};
</script>

<style>
h1 {
  color: cyan;
}
</style>
