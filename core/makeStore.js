import Vue from 'vue'
import enums from './enums'

const { INITIAL, PENDING, DONE } = enums

export default function($actions) {
  return {
    namespaced: true,
    state() {
      return {}
    },
    mutations: {
      resetState(currentState) {
        Object.assign(currentState, {})
      },
      [$actions.mutation](state, { action, state: actionState }) {
        switch (actionState) {
          case INITIAL:
            return Vue.set(state, action, undefined)
          case PENDING:
            if (!state[action]) {
              return Vue.set(state, action, 1)
            }
            state[action] = state[action] + 1
            return
          case DONE:
            if (!state[action]) {
              return Vue.set(state, action, 0)
            }
            state[action] = state[action] - 1
            return
          default:
            throw new Error('Unknown action state: ' + actionState)
        }
      }
    }
  }
}
