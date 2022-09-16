import { defineStore } from "pinia";
import axiosInstance from "../apis/axios";
import Swal from "sweetalert2";
import router from "../router";

export const useMainStore = defineStore("main", {
  state: () => ({ fetchedData: null }),
  getters: {},
  actions: {
    async findMatch(match_id, callback) {
      try {
        const { data } = await axiosInstance.get(
          `dota/match/analysis/${match_id}`,
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );

        this.fetchedData = data;
        callback();
      } catch (error) {
        console.log();
      }
    },
    async allHeroes(callback) {
      try {
        const { data } = await axiosInstance.get("dota/heroes", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        this.fetchedData = data;
        callback();
      } catch (error) {
        console.log(error);
      }
    },
  },
});
