
<template>
  <div class="container bg-light">
    <div class="page-header">
      <h2>Vorlesungstermine</h2>
    </div>
    <DataTable :data="data" :columns="columns"> </DataTable>
  </div>
</template>
<script>
import { store } from "../store";
import DataTable from "../components/DataTable.vue";
export default {
  components: {
    DataTable,
  },
  data() {
    return {
      data: store.lectureDates,
      columns: [
        "name",
        "startDate",
        "endDate",
        "lecturer",
        "lecture",
        "semester",
      ],
    };
  },
};
</script>
