const cookieparser = process.server ? require("cookieparser") : undefined;

export const omoAuth = {
  namespaced: true,
  state: {
    auth: {}
  },
  getters: {
    getAuth: state => state.auth
  },
  mutations: {
    setAuth(state: any, auth: any) {
      state.auth = auth;
    }
  },
  actions: {
    nuxtServerInit({ commit }, { req }) {
      let auth = null;
      if (req.headers.cookie) {
        const parsed = cookieparser.parse(req.headers.cookie);
        try {
          auth = JSON.parse(parsed.auth);
        } catch (err) {
          // No valid cookie found
        }
      }
      commit("setAuth", auth);
    }
  }
};
