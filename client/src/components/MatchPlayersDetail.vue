<script>
import { mapActions, mapState } from "pinia";
import { useMainStore } from "../stores/main";
import TableRow from "../components/TableRow.vue";

export default {
  data() {
    return { hasData: false, match_id: undefined };
  },
  components: { TableRow },
  computed: {
    ...mapState(useMainStore, ["fetchedData"]),
  },
  methods: {
    ...mapActions(useMainStore, ["findMatch"]),
    find() {
      this.findMatch(this.match_id, () => {
        this.hasData = true;
      });
    },
  },
};
</script>

<template>
  <div class="columns p-6">
    <div class="column">
      <input
        class="input"
        type="text"
        placeholder="Search by mathc ID"
        v-model="match_id"
      />
    </div>
    <div class="column">
      <button @click="find" class="button">Search</button>
    </div>
  </div>
  <div v-if="hasData" class="columns is-centered">
    <table class="table">
      <thead>
        <tr>
          <th>No.</th>
          <th>Hero</th>
          <th>Summary Analysis</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <TableRow
          v-for="(datum, index) in fetchedData"
          :key="datum.id"
          :datum="datum"
          :number="index + 1"
        />
      </tbody>
    </table>
  </div>
  <div v-else class="columns m-6 is-centered">
    <div class="columns">
      <h1 class="title is-3 is-light">No data, please search your match!</h1>
    </div>
  </div>
</template>
