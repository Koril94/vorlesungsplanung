<template>
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
          <h5 class="modal-title" id="exampleModalLabel">New study class</h5>
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
                v-model="studyClass.name"
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
                v-model="studyClass.startDate"
              />
            </div>
            <div class="col-12">
              <label for="endDate" class="form-label">End date</label>
              <input
                type="date"
                class="form-control"
                id="endDate"
                v-model="studyClass.endDate"
              />
            </div>
            <div class="col-md-12">
              <label for="studyProgram" class="form-label">Study Class</label>
              <select
                v-model="studyClass.studyProgram"
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
            Add study class
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
const emptyStudyClass = {
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
    studyClassId: String,
  },
  data() {
    const studyClass =
      this.studyClassId in store.studyClasses
        ? store.studyClasses[this.studyClassId]
        : JSON.parse(JSON.stringify(emptyStudyClass));
    return {
      store: store,
      studyClass: studyClass,
    };
  },
  watch: {
    studyClassId(newStudyClassId, oldStudyClassId) {
      this.studyClass =
        newStudyClassId in store.studyClasses
          ? store.studyClasses[newStudyClassId]
          : JSON.parse(JSON.stringify(emptyStudyClass));
    },
  },
  methods: {
    create: function () {
      const isUpdate = this.studyClassId in store.studyClasses;
      const currentStudyClass = Object.entries(store.studyClasses).length;
      const studyClassId = isUpdate
        ? this.studyClassId
        : `studyClass${currentStudyClass + 1}`;
      this.studyClass.id = studyClassId;
      let newStudyClass = JSON.parse(JSON.stringify(this.studyClass));

      store.studyClasses[studyClassId] = newStudyClass;
      this.studyClass = isUpdate
        ? newStudyClass
        : JSON.parse(JSON.stringify(emptyStudyClass));
    },
  },
};
</script>

<style>
h1 {
  color: cyan;
}
</style>
