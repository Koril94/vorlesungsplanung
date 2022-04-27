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
<template>
  <DataTable :data="data" :columns="columns"> </DataTable>
</template>
