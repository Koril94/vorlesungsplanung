<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th v-for="key in columns" :key="key">
          {{ key }}
          <span> </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in data" :key="entry">
        <td v-for="key in columns" :key="key">
          {{ entry[key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script type="module">
export default {
  props: {
    data: Object,
    columns: Array,
  },
};
</script>
