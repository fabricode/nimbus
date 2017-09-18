import types from '../types'

const updateField = (field, value) => ({
  type: types.UPDATE_FIELD,
  payload: {field, value}
})

const login = () => ({
  type: types.AUTHENTICATION_ATTEMPT,
})


export default {
  updateField,
  login
}
