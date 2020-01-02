import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: '戴海天electron项目',
  },
  mutations: {
    // 数据统一修改，避免多操作函数情况，缺陷：无法精细化操作变量，操作方式类似微信小程序操作
    set_data(state, data) {
      for (let key in data) {
        state[key] = data[key];
      }
    },
  },
  actions: {},
  modules: {},
});
