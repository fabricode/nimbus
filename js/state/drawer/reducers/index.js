import types from '../types';

const initialState = {
  drawer_open: false,
};

const drawer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_DRAWER:
      return {...state, drawer_open: state.drawer_open,};
    default:
      return state
  }
}
export default drawer
