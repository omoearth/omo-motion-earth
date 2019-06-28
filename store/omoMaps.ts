export const omoMaps = {
  namespaced: true,
  state: {
    zoom: 12,
    radius: 2000,
    getters: {
      getMap: state => state
    },
    mutations: {
      setMap(state, payload: string) {
        state = payload;
      }
    }
  }
};
