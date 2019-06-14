const cookieparser = process.server ? require("cookieparser") : undefined;

export const state = () => ({
  auth: null,
  actions: [],
  actionComponent: "",
  asideComponent: "",
  navComponent: "",
  showNav: false,
  showAside: false,
  showActions: false,
  showHeader: false,
  showFooter: true
});

export const getters = {
  getActions: (state: any) => state.actions,
  getActionComponent: (state: any) => state.actionComponent,
  getAsideComponent: (state: any) => state.asideComponent,
  getNavComponent: (state: any) => state.navComponent,
  getShowNav: (state: any) => state.showNav,
  getShowAside: (state: any) => state.showAside,
  getShowActions: (state: any) => state.showActions,
  getShowHeader: (state: any) => state.showHeader,
  getShowFooter: (state: any) => state.showFooter
};

export const mutations = {
  setShowNav(state: any, payload: boolean) {
    state.showNav = payload;
  },
  setShowHeader(state: any, payload: boolean) {
    state.showHeader = payload;
  },
  setShowAside(state: any, payload: boolean) {
    state.showAside = payload;
  },
  setShowActions(state: any, payload: boolean) {
    state.showActions = payload;
  },
  setShowFooter(state: any, payload: boolean) {
    state.showFooter = payload;
  },
  setActionComponent(state: any, payload: string) {
    state.actionComponent = payload;
  },
  setAsideComponent(state: any, payload: string) {
    state.asideComponent = payload;
  },
  setNavComponent(state: any, payload: string) {
    state.navComponent = payload;
  },
  setAuth(state: any, auth: any) {
    state.auth = auth;
  },
  setActions(state: any, payload) {
    state.actions = payload || [];
  }
  // setCounter: (state, payload) => {
  //   state.counter += payload;
  // },
  // setClicks: (state, payload) => {
  //   state.clicks -= payload;
  // }
};

export const actions = {
  setActionComponent: (context: any, payload: string) => {
    context.commit("actionComponent", payload);
  },
  setAsideComponent: (context: any, payload: string) => {
    context.commit("asideComponent", payload);
  },
  setNavComponent: (context: any, payload: string) => {
    context.commit("navComponent", payload);
  },
  setHeaderComponent: (context: any, payload: string) => {
    context.commit("headerComponent", payload);
  },
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
