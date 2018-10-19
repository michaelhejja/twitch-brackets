import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	isOpen: false,
    count: 0,
    matches: [
      {id: 1000, player1: { team: 'bifu', name: 'spabrog', voted: true }, player2: { team: 'bifu', name: 'thotwhisper', voted: false }, complete: false, winner: null },
      {id: 1001, player1: { team: 'bifu', name: 'coach steve', voted: false }, player2: { team: 'bifu', name: 'pimpscooby', voted: true }, complete: false, winner: null },
      {id: 1002, player1: { team: 'eqnx', name: 'ohhaifrancy', voted: false }, player2: { team: 'echo', name: 'sonicfox', voted: true }, complete: false, winner: null },
    ],
    currentMatchId: null
  },
  mutations: {
    toggleOpen (state) {
      state.isOpen = !state.isOpen
    },
    increment (state) {
      state.count++
    },
  },
  getters: {
    mainTitle: state => {
      return state.isOpen ? 'decision maker' : 'bracket'
    }
  }
})
