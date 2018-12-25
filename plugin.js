import ActionsStates from './ActionsStates'
import dispatchWrapper from './dispatchWrapper'
import makeStore from './makeStore'
import Vue from 'vue'

const moduleName = '<%= options.module %>'
const mutationName = '<%= options.mutation %>'

export default function(ctx, inject) {
  const { store } = ctx
  const actions = new ActionsStates(Vue, store, moduleName, mutationName)
  store.registerModule(moduleName, makeStore(actions))
  store.dispatch = dispatchWrapper(actions)
  ctx.$actions = actions
  inject('actions', actions)
}
