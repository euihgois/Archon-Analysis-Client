import { defineStore } from "pinia";
import axiosInstance from "../apis/axios";

export const useMainStore = defineStore("main", {
  state: () => ({ data: null }),
  getters: {},
  actions: {},
});
