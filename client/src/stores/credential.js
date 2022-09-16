import { defineStore } from "pinia";
import Swal from "sweetalert2";
import router from "../router";
import axiosInstance from "../apis/axios";

export const useCredentialStore = defineStore("credential", {
  state: () => ({ isLogin: false }),
  actions: {
    async login({ email, password }) {
      try {
        const {
          data: { access_token },
        } = await axiosInstance.post("login", { email, password });

        localStorage.setItem("access_token", access_token);

        Swal.fire({
          icon: "success",
          title: "Logging In",
          text: "Success",
        });
        router.push({ name: "home" });
      } catch ({
        response: {
          data: { message },
        },
      }) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: message,
        });
      }
    },

    logout() {
      localStorage.clear();
      router.push({ name: "login" });
    },
  },
});
