import { omoLayout } from "./omoLayout";
import { omoUser } from "./omoUser";
const cookieparser = process.server ? require("cookieparser") : undefined;
const jwt = require("jsonwebtoken");
const Cookie = require("js-cookie");

export const modules = {
  omoLayout,
  omoUser
};
export const state = () => ({
  user: null
});

export const mutations = {
  setToken(state: any, payload: any) {
    Cookie.set("auth", payload);
    if (payload) {
      // var decoded = jwt.verify(auth.accessToken, process.env.OMO_SECRET);
      var decoded = jwt.verify(
        payload.accessToken,
        "aodsiguzhasiodfhaslfalskfhladshfölasdkfjnöoasdfjöoasdhjfölasdhf"
      );
      state.user = decoded.user;
    } else {
      state.user = null;
    }
  }
};

export const getters = {
  getUser: state => state.user
};
export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let auth = null;
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);
      try {
        auth = JSON.parse(parsed.auth);
      } catch (err) {
        //GBUSDS
      }
    }
    commit("setToken", auth);
  }
};
