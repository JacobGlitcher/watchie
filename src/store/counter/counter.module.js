import state from './counter.state'
import getters from './counter.getters'
import actions from './counter.actions'
import mutations from './counter.mutations'

export default {
  namespaced: true,

  state: () => ({
    ...state,
  }),
  getters,
  actions,
  mutations,
}
