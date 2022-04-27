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
        <td>
          <button
            @click="$emit('update', entry.id)"
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#semesterControllerModal"
          >
            Update
          </button>
          <button
            @click="$emit('remove', entry.id)"
            type="button"
            class="btn btn-secondary"
          >
            Delete
          </button>
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
