const mutations = {
  add(state, m) {
    state.count += m
  },
  reduce(state, n) {
    console.log('n:', n)
    state.count -= n
  }
}

export default mutations
