import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import usersReducer from "./users.reducer";
import postReducer from "./post.reducer";
import allPostsReducer from "./allPost.reducer";
import trendingReducer from "./trending.reducer";
import errorsReducer from "./errors.reducer";

export default combineReducers({
  userReducer,
  usersReducer,
  postReducer,
  allPostsReducer,
  trendingReducer,
  errorsReducer,
});
