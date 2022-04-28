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
          <h5 class="modal-title" id="exampleModalLabel">Neue Vorlesung</h5>
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
              <label for="lectureName" class="form-label">Name</label>
              <input
                v-model="lecture.lectureName"
                type="text"
                class="form-control"
                id="lectureName"
              />
            </div>
            <div class="col-md-6">
              <label for="moduleName" class="form-label">Modulname</label>
              <input
                v-model="lecture.moduleName"
                type="text"
                class="form-control"
                id="moduleName"
              />
            </div>
            <div class="col-12">
              <label for="Duration" class="form-label">Dauer</label>
              <input
                type="number"
                class="form-control"
                id="Duration"
                v-model="lecture.Duration"
              />
            </div>
            <div class="col-md-12">
              <label for="studyProgram" class="form-label">Studiengang</label>
              <select
                v-model="lecture.studyProgram"
                id="studyProgram"
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
            Vorlesung hinzufügen
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
const emptyLecture = {
  id: "",
  lectureName: "",
  moduleName: null,
  Duration: null,
  lectureDates: [],
  lecturers: [],
  studyProgram: null,
};
export default {
  setup() {},
  props: {
    lectureId: String,
  },
  data() {
    const lecture =
      this.lectureId in store.lectures
        ? store.lectures[this.lectureId]
        : JSON.parse(JSON.stringify(emptyLecture));
    return {
      store: store,
      lecture: lecture,
    };
  },
  watch: {
    lectureId(newLectureId, oldlectureId) {
      this.lecture =
        newLectureId in store.lectures
          ? store.lectures[newLectureId]
          : JSON.parse(JSON.stringify(emptyLecture));
    },
  },
  methods: {
    create: function () {
      const isUpdate = this.lectureId in store.lectures;
      const currentLectures = Object.entries(store.lectures).length;
      const lectureId = isUpdate
        ? this.lectureId
        : `lecture${currentLectures + 1}`;
      this.lecture.id = lectureId;
      let newLecture = JSON.parse(JSON.stringify(this.lecture));

      store.lectures[lectureId] = newLecture;
      let programLectures =
        store.studyPrograms[newLecture.studyProgram].lectures;
      if (!programLectures.includes(lectureId)) programLectures.push(lectureId);
      this.lecture = isUpdate
        ? newLecture
        : JSON.parse(JSON.stringify(emptyLecture));
    },
  },
};
</script>

<style>
h1 {
  color: cyan;
}
</style>
