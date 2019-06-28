export const currentUser = {
  namespaced: true,
  state: {
    firstname: "",
    lat: null,
    lon: null,
    place: "",
    placetype: "",
    state: "",
    country: "",
    lang: "en"
  },
  getters: {
    getUser: state => state
  },
  mutations: {
    setFirstname(state, payload: string) {
      state.firstname = payload;
    },
    setLatitude(state, payload: number) {
      state.lat = payload;
    },
    setLongitude(state, payload: number) {
      state.lon = payload;
    },
    setPlace(state, payload: string) {
      state.place = payload;
    },
    setPlaceType(state, payload: string) {
      state.placetype = payload;
    },
    setState(state, payload: string) {
      state.state = payload;
    },
    setCountry(state, payload: string) {
      state.country = payload;
    },
    setLang(state, payload: string) {
      state.lang = payload;
    }
  }
};
