import Vuex from 'vuex';
import Vue from 'vue';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  problems: [],
  fetchProblemsStatus: 'init',
};

const getters = {};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
