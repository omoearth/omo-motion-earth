const omoContextPanel = {
  namespaced: true,
  state: {
    show: true
  },
  getters: {
    getOmoContextPanel: state => state
  },
  mutations: {
    setOmoContextShow(state: any, payload: any) {
      state.show = payload;
    }
  }
};

export default { omoContextPanel };
