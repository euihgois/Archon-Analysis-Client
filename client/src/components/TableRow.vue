<script>
export default {
  props: ["datum", "number"],
  computed: {
    status() {
      const status = Math.round(
        (Object.values(this.datum.benchmarks)
          .map((x) => Number(x.pct))
          .reduce((previous, current) => previous + current) /
          Object.keys(this.datum.benchmarks).length) *
          100
      );
      return `Better than ${status}% players in dota`;
    },
  },
};
</script>

<template>
  <tr>
    <td>{{ number }}</td>
    <td><img :src="datum.imageUrl" :alt="datum.heroName" /></td>
    <td>{{ status }}</td>
    <td>Detail</td>
  </tr>
</template>
