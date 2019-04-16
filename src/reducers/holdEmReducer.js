import { HOLD_EM } from "../actions/types";

const initialState = {
  holdEmHand: "Hold Em Hand"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case HOLD_EM:
      return {
        holdEmHand: action.payload
      };
    default:
      return state;
  }
}
