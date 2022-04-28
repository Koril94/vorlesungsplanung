<template>
  <div class="d-flex justify-content-evenly flex-wrap p-3">
    <div class="mx-3 card text-white bg-primary mb-3" style="max-width: 18rem">
      <div class="card-header">Nächste Vorlesung</div>
      <div class="card-body">
        <h5 class="card-title">Primary card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
    <div class="mx-3 card text-white bg-primary mb-3" style="max-width: 18rem">
      <div class="card-header">News</div>
      <div class="card-body">
        <h5 class="card-title">Primary card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
    <div class="mx-3 card text-white bg-primary mb-3" style="max-width: 18rem">
      <div class="card-header">Aufgaben</div>
      <div class="card-body">
        <h5 class="card-title">Primary card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
    <div class="mx-3 card text-white bg-primary mb-3" style="max-width: 18rem">
      <div class="card-header">Dokumente</div>
      <div class="card-body">
        <h5 class="card-title">Primary card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  </div>

  <div class="container-fluid px-5">
    <FullCalendar :options="calendarOptions" />
  </div>
</template>
<script>
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import { store } from "../store";

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  setup() {},
  data() {
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
    return {
      store,
      calendarOptions: {
        plugins: [dayGridPlugin],
        initialView: "dayGridWeek",
        timeZone: "UTC",
        events,
      },
    };
  },
};
</script>
