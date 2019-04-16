import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import holdEmReducer from "./holdEmReducer";

export default combineReducers({
  form: formReducer,
  holdEmHand: holdEmReducer
});
