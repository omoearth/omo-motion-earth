const cookieparser = process.server ? require("cookieparser") : undefined;

export const state = () => ({
  auth: null,
  omoContext: { show: true },
  omoHeader: { show: true },
  omoDetail: { show: false },
  omoFooter: { show: true },
  omoActions: { show: false },
  omoOverview: { show: true }
});

export const getters = {
  getOmoContext: state => state.omoContext,
  getOmoHeader: state => state.omoHeader,
  getOmoDetail: state => state.omoDetail,
  getOmoFooter: state => state.omoFooter,
  getOmoActions: state => state.omoActions,
  getOmoOverview: state => state.omoOverview
};

export const mutations = {
  setAuth(state: any, auth: any) {
    state.auth = auth;
  },
  setOmoContext(state: any, payload: any) {
    state.omoContext = payload;
  },
  setOmoHeader(state: any, payload: any) {
    state.omoHeader = payload;
  },
  setOmoDetail(state: any, payload: any) {
    state.omoDetail = payload;
  },
  setOmoFooter(state: any, payload: any) {
    state.omoFooter = payload;
  },
  setOmoActions(state: any, payload: any) {
    state.omoActions = payload;
  },
  setOmoOverview(state: any, payload: any) {
    state.omoOverview = payload;
  }
};

export const actions = {
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
};
