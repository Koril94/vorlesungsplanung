// store.js
import { reactive } from "vue";

const lectures = {
  lecture1: {
    id: "lecture1",
    lectureName: "Einführung Programmierung",
    moduleName: "Informatik",
    Duration: 125,
    lectureDates: ["lectureDate1"],
    lecturers: ["lecturer1"],
    studyProgram: "program1",
  },
};

const lecturers = {
  lecturer1: {
    id: "lecturer1",
    firstName: "Max",
    lastName: "Mustermann",
    email: "max.m@email.fancy",
    lectureDates: ["lectureDate1"],
    lectures: ["lecture1"],
    studyProgram: "program1",
  },
};

const semesters = {
  semester1: {
    id: "semester1",
    startDate: "2022-04-01",
    endDate: "2022-08-31",
    number: 1,
    name: "SoSe22",
    studyClass: "studyClass1",
    lectureDates: ["lectureDate1"],
  },
};

const studyPrograms = {
  studyProgram1: {
    id: "studyProgram1",
    name: "Informatik",
    shortName: "Inf",
    studyClasses: ["studyClass1"],
    lectures: ["lecture1"],
    lecturers: ["lecturer1"],
  },
};

const studyClasses = {
  studyClass1: {
    id: "studyClass1",
    name: "HeldenKlasse",
    startDate: "2020-10-01",
    endDate: "2022-09-30",
    studyProgram: "studyProgram1",
    semesters: ["semester1"],
  },
};

const lectureDates = {
  lectureDate1: {
    id: "lectureDate1",
    name: "HeldenKlasse",
    startDate: "2022-05-02",
    endDate: "2022-05-02",
    lecture: "lecture1",
    lecturer: "lecturer1",
    semester: "semester1",
  },
};

export const store = reactive({
  lectures: lectures,
  lecturers: lecturers,
  studyPrograms: studyPrograms,
  lectureDates: lectureDates,
  semesters: semesters,
  studyClasses: studyClasses,
});
