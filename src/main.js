import { createApp } from 'vue'
import { createStore } from "vuex";
import App from './App.vue'
import './assets/css/reset.css';
import axios from 'axios';

const axiosOptions = {
  baseURL: 'https://tco-dev.evrazsteelbuilding.ru/api',
  headers: {
    Authorization: 'Token 63ab652db85025784db873bcd17904932e4f97a2'
  }
}

const store = createStore({
  state: {
    partners: [],
    sortByAsc: true,
    currentPage: 1,
    itemsPerPage: 9
  },
  getters: {
    partners: (state) => state.partners,
    sortByAsc: (state) => state.sortByAsc,
    currentPage: (state) => state.currentPage,
    currentPagePartners: (state) => state.partners.slice(
      (state.currentPage-1) * state.itemsPerPage, state.currentPage * state.itemsPerPage
    ),
    pagesCount: (state) => Math.ceil(state.partners.length/state.itemsPerPage),
    itemsPerPage: (state) => state.itemsPerPage,
  },
  mutations: {
    setPartners (state, partners) {
      state.partners = partners
    },
    changeSort (state) {
      state.sortByAsc = !state.sortByAsc;
      state.partners.sort((partnerA, partnerB) => {
        return state.sortByAsc
          ? new Date(partnerA.created) - new Date(partnerB.created)
          : new Date(partnerB.created) - new Date(partnerA.created);
      })
    },
    setPage (state, page) {
      state.currentPage = page;
    },
    setItemsPerPage (state, count) {
      state.itemsPerPage = count;
    },
  },
  actions: {
    async getPartners ({ getters, commit }) {
      const { data } = await axios.get('/partners/', axiosOptions);
      data.sort((partnerA, partnerB) => {
        return getters.sortByAsc
          ? new Date(partnerA.created) - new Date(partnerB.created)
          : new Date(partnerB.created) - new Date(partnerA.created);
      });
      commit('setPartners', data);
    },
    async blockPartner ({ commit }, id) {
      const partners = await axios.get(`partner/${id}/block`, axiosOptions);
      commit('setPartners', partners);
    },
    async unblockPartner ({ commit }, id) {
      const partners = await axios.get(`partner/${id}/unblock`, axiosOptions);
      commit('setPartners', partners);
    },
    changeSort ({ commit }) {
      commit('changeSort');
    },
    setPage ({ commit }, page) {
      commit('setPage', page);
    },
    setPrevPage ({ getters, commit }) {
      commit('setPage', getters.currentPage - 1);
    },
    setNextPage ({ getters, commit }) {
      commit('setPage', getters.currentPage + 1);
    },
    increaseItemsPerPage ({ getters, commit }) {
      commit('setItemsPerPage', getters.itemsPerPage + 5);
    },
  }
})

createApp(App).use(store).mount("#app");
