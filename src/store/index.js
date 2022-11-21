import CounterModule from './counter/counter.module'

import { createStore } from 'vuex'

export default createStore({
  strict: true,
  modules: {
    CounterModule,
  },
})
