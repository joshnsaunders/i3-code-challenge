import axios from "axios";
import { reset } from "redux-form";

import { HOLD_EM } from "./types";

export const showHoldEmHand = data => dispatch => {
  dispatch({ type: HOLD_EM, payload: data });
  dispatch(reset("holdem"));
};
