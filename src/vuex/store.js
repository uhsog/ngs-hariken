import Vuex from 'vuex';
import Vue from 'vue';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    problems: [],
    fetchProblemsStatus: {
      isError: false,
      isCompleted: false,
    },
    allProblems: {
      data: [],
      page: 0,
      loading: false,
      isError: false,
    },
    selectedProblem: {
      data: null,
      responses: {
        data: [],
        loading: false,
        isError: false,
      },
    },
    respondedProblems: {
      data: [],
      resposes: {
        data: [],
        loading: false,
        isError: false,
      },
    },
  },
  getters: {
    problems: state => state.problems,
    fetchProblemsStatus: state => state.fetchProblemsStatus,
    allProblems: state => state.allProblems,
    fetchAllProblemsStatus: state => state.fetchAllProblemsStatus,
    selectedProblem: state => state.selectedProblem,
    respondedProblems: state => state.respondedProblems,
  },
  actions,
  mutations,
});
