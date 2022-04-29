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
          <h5 class="modal-title" id="exampleModalLabel">Neuer Studiengang</h5>
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
                v-model="studyProgram.name"
                type="text"
                class="form-control"
                id="name"
              />
            </div>
            <div class="col-md-6">
              <label for="shortName" class="form-label">Abkürzung</label>
              <input
                v-model="studyProgram.shortName"
                type="text"
                class="form-control"
                id="shortName"
              />
            </div>
          </form>
        </div>
        <div class="modal-footer px-3">
          <button type="button" @click="create" class="btn btn-primary">
            Studiengang hinzufügen
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
const emptyStudyProgram = {
  id: "",
  name: "",
  shortName: null,
  studyClasses: [],
  lecturers: [],
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
    studyProgramId: String,
  },
  data() {
    const studyProgram =
      this.studyProgramId in store.studyPrograms
        ? store.studyPrograms[this.studyProgramId]
        : JSON.parse(JSON.stringify(emptyStudyProgram));
    return {
      store: store,
      studyProgram: studyProgram,
    };
  },
  watch: {
    studyProgramId(newStudyProgramId, oldstudyProgramId) {
      this.studyProgram =
        newStudyProgramId in store.studyPrograms
          ? store.studyPrograms[newStudyProgramId]
          : JSON.parse(JSON.stringify(emptyStudyProgram));
    },
  },
  methods: {
    create: function () {
      const isUpdate = this.studyProgramId in store.studyPrograms;
      const currentstudyPrograms = Object.entries(store.studyPrograms).length;
      const studyProgramId = isUpdate
        ? this.studyProgramId
        : `studyProgram${currentstudyPrograms + 1}`;
      this.studyProgram.id = studyProgramId;
      let savestudyProgram = JSON.parse(JSON.stringify(this.studyProgram));

      store.studyPrograms[studyProgramId] = savestudyProgram;
      this.studyProgram = isUpdate
        ? savestudyProgram
        : JSON.parse(JSON.stringify(emptyStudyProgram));
    },
  },
};
</script>

<style>
h1 {
  color: cyan;
}
</style>
