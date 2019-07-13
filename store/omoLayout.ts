export const omoLayout = {
  namespaced: true,
  state: {
    omoPanelLeft: {
      show: false,
      component: "OmoMenu"
    },
    omoPanelRight: {
      show: false,
      component: ""
    },
    omoPanelTop: {
      show: false,
      component: ""
    },
    omoPanelBottom: {
      show: false,
      component: ""
    },
    omoPanelSlideUp: {
      show: false,
      component: ""
    },
    omoActionButton: {
      text: ""
    }
  },
  getters: {
    getOmoPanelLeft: state => state.omoPanelLeft,
    getOmoPanelRight: state => state.omoPanelRight,
    getOmoPanelBottom: state => state.omoPanelBottom,
    getOmoActionButton: state => state.omoActionButton,
    getOmoPanelTop: state => state.omoPanelTop,
    getOmoPanelSlideUp: state => state.omoPanelSlideUp
  },
  mutations: {
    setOmoActionButton(state, payload) {
      state.omoActionButton = payload;
    },
    setOmoPanelLeft(state, payload) {
      if (payload.component) {
        state.omoPanelLeft = payload;
      } else {
        state.omoPanelLeft.show = payload.show;
      }
    },
    setOmoPanelRight(state, payload) {
      if (payload.component) {
        state.omoPanelRight = payload;
      } else {
        state.omoPanelRight.show = payload.show;
      }
    },
    setOmoPanelBottom(state, payload) {
      if (payload.component) {
        state.omoPanelBottom = payload;
      } else {
        state.omoPanelBottom.show = payload.show;
      }
    },
    setOmoPanelTop(state, payload) {
      if (payload.component) {
        state.omoPanelTop = payload;
      } else {
        state.omoPanelTop.show = payload.show;
      }
    },
    setOmoPanelSlideUp(state, payload) {
      if (payload.component) {
        state.omoPanelSlideUp = payload;
      } else {
        state.omoPanelSlideUp.show = payload.show;
      }
    }
  }
};
