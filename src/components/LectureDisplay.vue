<template>
  <div class="">
    <div class="list-group align-center">
      <a
        v-for="lecture in store.lectures"
        :key="lecture.id"
        href="#"
        class="row d-flex list-group-item list-group-item-action bg-card "
        aria-current="true"
      >
        <h5 class="mb-1 col col-12">{{ lecture.lectureName }}</h5>
        <p class="col col-12">
          <label>Dozent: </label>
          {{ store.lecturers[lecture.lecturers[0]].firstName }}
          {{ store.lecturers[lecture.lecturers[0]].lastName }}
        </p>
        <div class="d-flex w-100 justify-content-between">
          <p class="mb-1"><label>Modul: </label>{{ lecture.moduleName }}</p>
          <p class="mb-1"><label>Dauer: </label>{{ lecture.Duration }}</p>
        </div>
        <small
          ><label>Studiengang: </label
          >{{ store.studyPrograms[lecture.studyProgram].name }}</small
        >
      </a>
    </div>
  </div>
</template>

<script>
import { store } from "../store";

export default {
  setup() {},
  data() {
    return {
      store: store,
    };
  },
  watch: {
    store: {
      handler() {
        this.data = getData();
      },
      deep: true,
    },
  },
};
</script>