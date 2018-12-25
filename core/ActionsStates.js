import STATES from './enums'

export default class ActionsStates {
  constructor(Vue, store, module, mutation) {
    this.module = module
    this.mutation = mutation

    this.VM = new Vue({
      data() {
        return {
          store
        }
      },
      computed: {
        states() {
          return this.store.state[module]
        }
      },
      methods: {
        setState(action, state) {
          const commit = module + '/' + mutation
          this.store.commit(commit, { action, state })
        },

        checkState(actionTypes, handler) {
          if (!Array.isArray(actionTypes)) {
            actionTypes = [actionTypes]
          }

          for (let i = 0; i < actionTypes.length; i++) {
            const actionType = actionTypes[i]
            if (handler(this.states[actionType])) {
              return true
            }
          }

          return false
        },

        initial(actionTypes) {
          return this.checkState(
            actionTypes,
            actionState => actionState === undefined
          )
        },
        pending(actionTypes) {
          return this.checkState(actionTypes, actionState => actionState > 0)
        },
        done(actionTypes) {
          return this.checkState(actionTypes, actionState => actionState === 0)
        }
      }
    })
  }

  get setState() {
    return this.VM.setState
  }

  get initial() {
    return this.VM.initial
  }

  get pending() {
    return this.VM.pending
  }

  get done() {
    return this.VM.done
  }

  get states() {
    return this.VM.states
  }

  get STATES() {
    return STATES
  }
}
