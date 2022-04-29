<template>
  <div class="bg-light">
    <div class="container">
      <div class="d-flex justify-content-evenly flex-wrap p-3">
        <div class="mx-3 card mb-3" style="max-width: 30rem">
          <div class="card-header text-dark bg-primary">Nächste Vorlesung</div>
          <div class="card-body bg-card">
            <LectureDateDisplay :lectureDateId="lectureDateId">
            </LectureDateDisplay>
          </div>
        </div>
        <div
          class="mx-3 card text-dark bg-primary mb-3"
          style="max-width: 30rem"
        >
          <div class="card-header">News</div>
          <div class="card-body bg-card">
            <h5 class="card-title">Maskenpflicht</h5>
            <p class="card-text">
              Ab dem 1.April 2022 entfällt die Maskenpflicht. Es werden auch
              keine Covid-19 Test´s mehr benötigt um in das Gebäude zu kommen.
            </p>
          </div>
        </div>
        <div
          class="mx-3 card text-dark bg-primary mb-3"
          style="max-width: 30rem"
        >
          <div class="card-header">Aufgaben</div>
          <div class="card-body bg-card">
            <h5 class="card-title">Aufgabenliste</h5>
            <p class="card-text">
              Vorlesung Wirtschaftsinformatiker, Vertiefung Javascript, Klausur
              Korrektur Digitale Infrastrukturen SCMT
            </p>
          </div>
        </div>
        <div
          class="mx-3 card text-dark bg-primary mb-3"
          style="max-width: 30rem"
        >
          <div class="card-header">Dokumente</div>
          <div class="card-body bg-card">
            <h5 class="card-title">PDF</h5>
            <p class="card-text">
              Klausur Web-Programmierung, Skript Web-Programmierung, Skript
              Digitale Infrastrukturen,
            </p>
          </div>
        </div>
      </div>

      <div class="container-fluid px-5 calendar my-5">
        <FullCalendar :options="calendarOptions" />
      </div>
      <div class="pt-3"></div>
    </div>
  </div>
</template>
<script>
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import LectureDateDisplay from "../components/LectureDateDisplay.vue";
import { store } from "../store";

export default {
  components: {
    LectureDateDisplay,
    FullCalendar, // make the <FullCalendar> tag available
  },
  setup() {},
  data() {
    let lectureDateId; // = 'lectureDate1';
    let events = [];
    let addedDates = [];

    Object.values(store.lectures).forEach((lecture) =>
      lecture.lectureDates.forEach((lectureDate) => {
        let dateEvent = store.lectureDates[lectureDate];
        if (addedDates.includes(lectureDate)) return;
        let singleEvent = {
          id: dateEvent.id,
          title: dateEvent.name,
          start: dateEvent.startDate,
          end: dateEvent.endDate,
        };
        events.push(singleEvent);
        addedDates.push(lectureDate);
      })
    );

    events.sort(function (a, b) {
      return new Date(b.startDate) - new Date(a.startDate);
    });

    lectureDateId = events[0].id;

    return {
      lectureDateId,
      store,
      calendarOptions: {
        plugins: [dayGridPlugin],
        height: "100%",
        locale: "de",
        initialView: "dayGridWeek",
        timeZone: "UTC",
        events,
        buttonText: {
          today: "Heute",
        },
      },
    };
  },
  mounted() {
    console.log("test");
    let events = [];
    let addedDates = [];
    Object.values(this.store.lectures).forEach((lecture) =>
      lecture.lectureDates.forEach((lectureDate) => {
        let dateEvent = this.store.lectureDates[lectureDate];
        if (addedDates.includes(lectureDate)) return;
        let singleEvent = {
          id: dateEvent.id,
          title: dateEvent.name,
          start: dateEvent.startDate,
          end: dateEvent.endDate,
        };
        events.push(singleEvent);
        addedDates.push(lectureDate);
      })
    );
    this.calendarOptions.events = events;
    console.log(this.calendarOptions.events.length);
  },
};
</script>
