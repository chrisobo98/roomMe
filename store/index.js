export const state = () => ({
  user: null
})

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    if (authUser) {
      const { uid, email, displayName } = authUser
      state.user = { uid, email, displayName }
    } else {
      state.user = null
    }
  }
}
