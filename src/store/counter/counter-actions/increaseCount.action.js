export default ({ commit }, payload) =>
  new Promise(async (resolve, reject) => {
    try {
      console.log(`[ increaseCount ]: increasing count by ${payload}...`)

      commit('SET_COUNT', payload)

      return resolve()
    } catch (e) {
      console.error('[ increaseCount ]:', e)
      return reject()
    }
  })
