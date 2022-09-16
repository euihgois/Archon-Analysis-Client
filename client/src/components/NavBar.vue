<script>
import { mapActions } from "pinia";
import { useCredentialStore } from "../stores/credential";

export default {
  methods: {
    ...mapActions(useCredentialStore, ["logout"]),
  },
};
</script>

<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link :to="{ name: 'home' }" class="navbar-item"
        ><img src="/dota-2-rank-archon-3.png" alt="LOGO"
      /></router-link>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link :to="{ name: 'match' }" class="navbar-item"
          >Search Match</router-link
        >
      </div>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <button class="button" @click="logout">Logout</button>
      </div>
    </div>
  </nav>
</template>
