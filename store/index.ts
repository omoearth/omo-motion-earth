import Footer from '~/interfaces/Footer'
import Header from '~/interfaces/Header'

const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({
  auth: null,
  actions: ['hihi'],
  header: { title: 'default' }
})

export const mutations = {
  setAuth(state: any, auth: any) {
    state.auth = auth
  },
  setActions(state: any, actions: Footer) {
    state.actions = actions || []
  },
  setHeader(state: any, header: Header) {
    state.header = header || {}
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = JSON.parse(parsed.auth)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setAuth', auth)
  }
}
