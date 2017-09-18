const getUsernamePassword = (state) => ({'username': state.auth.username, 'password': state.auth.password})

export default {
  getUsernamePassword,
}
