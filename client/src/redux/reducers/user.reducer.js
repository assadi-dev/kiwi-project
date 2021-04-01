import { GET_USER } from "../actions/user.actions";
const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
      break;

    default:
      return state;
      break;
  }
}
