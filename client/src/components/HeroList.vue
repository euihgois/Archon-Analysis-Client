<script>
import { mapState, mapActions } from "pinia";
import { useMainStore } from "../stores/main";
import HeroCard from "../components/HeroCard.vue";

export default {
  data() {
    return {
      hasData: false,
    };
  },
  methods: {
    ...mapActions(useMainStore, ["allHeroes"]),
  },
};
</script>

<template>
  <button @click="allHeroes">TEST</button>
</template>
