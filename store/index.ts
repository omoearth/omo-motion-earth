import Footer from "~/interfaces/Footer";

const cookieparser = process.server ? require("cookieparser") : undefined;

export const state = () => ({
  auth: null,
  actions: ["hihi"],
  actionComponent: "",
  showNav: true,
  showAside: true,
  showActions: true
});

export const getters = {
  getActionComponent: state => state.actionComponent,
  showNav: state => state.showNav,
  showAside: state => state.showAside,
  showActions: state => state.showActions
};

export const mutations = {
  showNav(state) {
    state.showNav = !state.showNav;
  },
  showAside(state) {
    state.showAside = !state.showAside;
  },
  showActions(state) {
    state.showActions = !state.showActions;
  },
  setActionComponent(state, actionComponent) {
    state.actionComponent = actionComponent;
  },
  setAuth(state: any, auth: any) {
    state.auth = auth;
  }
  // setActions(state: any, actions: Footer) {
  //   state.actions = actions || [];
  // }
  // setCounter: (state, payload) => {
  //   state.counter += payload;
  // },
  // setClicks: (state, payload) => {
  //   state.clicks -= payload;
  // }
};

export const actions = {
  asyncSetActionComponent: (context, payload) => {
    context.commit("actionComponent", payload);
  },
  // asyncSetClicks: (context, payload) => {
  //   setTimeout(() => {
  //     context.commit("setClicks", payload.by);
  //   }, payload.duration);
  // },
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
