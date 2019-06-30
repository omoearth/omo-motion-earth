export const omoUser = {
  namespaced: true,
  state: {
    email: "hardcoded@mail.com"
  },
  getters: {
    // getUser: state => state,
    getMail: state => state.email
  },
  mutations: {
    setMail(state, payload: string) {
      state.email = payload;
    }
    // setLatitude(state, payload: number) {
    //   state.lat = payload;
    // },
    // setLongitude(state, payload: number) {
    //   state.lon = payload;
    // },
    // setPlace(state, payload: string) {
    //   state.place = payload;
    // },
    // setPlaceType(state, payload: string) {
    //   state.placetype = payload;
    // },
    // setState(state, payload: string) {
    //   state.state = payload;
    // },
    // setCountry(state, payload: string) {
    //   state.country = payload;
    // },
    // setLang(state, payload: string) {
    //   state.lang = payload;
    // }
  }
};
