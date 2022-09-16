<script>
import { mapActions } from "pinia";
import { useCredentialStore } from "../stores/credential";

export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    ...mapActions(useCredentialStore, ["login"]),
    localLogin() {
      this.login(this.user);
    },
  },
};
</script>

<template>
  <div class="columns is-centered m-6 p-6">
    <div class="container is-fluid" id="login-form">
      <div class="column is-narrow is-one-third is-offset-one-quarter">
        <div class="column">
          <div class="title">Login Form</div>
        </div>
        <div class="column"></div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Email"
              v-model="user.email"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input
              class="input"
              type="password"
              placeholder="Password"
              v-model="user.password"
            />
          </div>
        </div>
        <div class="buttons">
          <button class="button is-primary" @click="localLogin">Login</button>
          <router-link :to="{ name: 'register' }"
            ><button class="button is-link">Register</button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
