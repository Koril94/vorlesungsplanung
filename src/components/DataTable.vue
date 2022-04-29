<template>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th v-for="key in columns" :key="key">
            {{ key[1] }}
            <span> </span>
          </th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in data" :key="entry">
          <td v-for="key in columns" :key="key">
            {{ entry[key[0]]}}
          </td>
          <td>
            <button
              @click="$emit('update', entry.id)"
              type="button"
              class="btn"
              data-bs-toggle="modal"
              data-bs-target="#semesterControllerModal"
            >
              <img src="./icons/pencil.svg" alt="Edit" />
            </button>
          </td>
          <td>
            <button
              @click="$emit('remove', entry.id)"
              type="button"
              class="btn"
            >
              <img src="./icons/delete-forever.svg" alt="Delete" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="module">
export default {
  props: {
    data: Object,
    columns: Array,
  },
  methods: {
    deleteSemester() {},
  },
};
</script>
