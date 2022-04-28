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
          <h5 class="modal-title" id="exampleModalLabel">New semester</h5>
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
              <label for="name" class="form-label">Name</label>
              <input
                v-model="semester.name"
                type="text"
                class="form-control"
                id="name"
              />
            </div>
            <div class="col-md-6">
              <label for="number" class="form-label">Number</label>
              <input
                v-model="semester.number"
                type="number"
                class="form-control"
                id="number"
              />
            </div>
            <div class="col-12">
              <label for="startDate" class="form-label">Start date</label>
              <input
                type="date"
                class="form-control"
                id="startDate"
                placeholder="2022-12-12"
                v-model="semester.startDate"
              />
            </div>
            <div class="col-12">
              <label for="endDate" class="form-label">End date</label>
              <input
                type="date"
                class="form-control"
                id="endDate"
                v-model="semester.endDate"
              />
            </div>
            <div class="col-md-12">
              <label for="studyClass" class="form-label">Study Class</label>
              <select
                v-model="semester.studyClass"
                id="studyClass"
                class="form-select"
              >
                <option
                  v-for="studyClass in store.studyClasses"
                  v-bind:key="studyClass.id"
                  v-bind:value="studyClass.id"
                >
                  {{ studyClass.name }}
                </option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer px-3">
          <button type="button" @click="create" class="btn btn-primary">
            Add semester
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
  methods: {
    create: function () {
      const isUpdate = this.semesterId in store.semesters;
      const currentSemesters = Object.entries(store.semesters).length;
      const semesterId = isUpdate
        ? this.semesterId
        : `semester${currentSemesters + 1}`;
      this.semester.id = semesterId;
      let saveSemester = JSON.parse(JSON.stringify(this.semester));

      let studyClassSemesters = store.studyClasses[saveSemester.studyClasses].semesters;
      if(!studyClassSemesters.includes(semesterId)) studyClassSemesters.push(semesterId);


      store.semesters[semesterId] = saveSemester;
      console.log(isUpdate);
      this.semester = isUpdate
        ? saveSemester
        : JSON.parse(JSON.stringify(emptySemester));
      console.log(this.semester);
    },
  },
};
</script>

<style>
h1 {
  color: cyan;
}
</style>
