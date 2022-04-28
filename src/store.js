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
    studyProgram: "studyProgram1",
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
    studyProgram: "studyProgram1",
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

function removeLecture(id) {
  delete this.lectures[id];

  Object.values(this.lecturers).forEach(lecturer => lecturer.lectures = lecturer.lectures.filter(lectureId => lectureId !== id));
  Object.values(this.studyPrograms).forEach(studyProgram => studyProgram.lectures = studyProgram.lectures.filter(lectureId => lectureId !== id));
  Object.values(this.lectureDates).filter(lectureDate => lectureDate.lecture === id).forEach(lectureDate => this.removeLectureDate(lectureDate.id));
  
}

function removeLectureDate(id) {
  delete this.lectureDates[id];
}

function removeLecturer(id) {
  console.log(this, '12')
  delete this.lecturers[id];

  Object.values(this.lectures)
    .filter((lecture) => lecture.lecturers.includes(id))
    .forEach(
      (lecture) =>
        (lecture.lecturers = lecture.lecturers.filter(
          (lecturerId) => lecturerId !== id
        ))
    );
  Object.values(this.studyPrograms)
    .filter((studyProgram) => studyProgram.lecturers.includes(id))
    .forEach(
      (studyProgram) =>
        (studyProgram.lecturers = studyProgram.lecturers.filter(
          (lecturerId) => lecturerId !== id
        ))
    );

}

function removeStudyClass(id) {
  
  delete this.studyClasses[id];
  Object.values(this.studyPrograms).forEach(
    (studyProgram) =>
      (studyProgram.studyClasses = studyProgram.studyClasses.filter(
        (studyClass) => studyClass !== id
      ))
  );
  
  Object.values(this.semesters).filter(semester => semester.studyClass === id).forEach(semester => this.removeSemester(semester.id));
}

function removeStudyProgram(id) {
  console.log(this)
  delete this.studyPrograms[id];
  Object.values(this.lectures).filter(lecture => lecture.studyProgram === id).forEach(lecture => this.removeLecture(lecture.id));

  Object.values(this.lecturers).filter(lecturer => lecturer.studyProgram === id).forEach(lecturer => this.removeLecturer(lecturer.id));

  Object.values(this.studyClasses).filter(studyClass => studyClass.studyProgram === id).forEach(studyClass => this.removeStudyClass(studyClass.id));
}


function removeSemester(id) {
  delete this.semesters[id];
  Object.values(this.studyClasses)
    .filter((studyClass) => studyClass.semesters.includes(id))
    .forEach(
      (studyClass) =>
        (studyClass.semesters = studyClass.semesters.filter(
          (semester) => semester !== id
        ))
    );

    Object.values(this.lectureDates).filter(lectureDate => lectureDate.semester === id).forEach(lectureDate => this.removeLectureDate(lectureDate.id))
    

}

export const store = reactive({
  lectures: lectures,
  lecturers: lecturers,
  studyPrograms: studyPrograms,
  lectureDates: lectureDates,
  semesters: semesters,
  studyClasses: studyClasses,
  removeLecture,
  removeLectureDate,
  removeLecturer,
  removeStudyClass,
  removeStudyProgram,
  removeSemester
});
