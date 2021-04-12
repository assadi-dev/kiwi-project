import { GET_POST_ERRORS } from "../actions/post.action";

const initialState = { postErrors: [] };

export default function errorsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POST_ERRORS:
      return {
        postErrors: action.payload,
        userErrors: [],
      };

    default:
      return state;
  }
}
