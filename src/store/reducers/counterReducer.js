import produce from "immer";
import { INCREMENT, DECREMENT } from "../actionTypes/counter";

const initialState = {
  count: 0,
};

export default produce((draft, action) => {
  switch (action.type) {
    case INCREMENT:
      draft.count = action.payload;
      break;
    case DECREMENT:
      draft.count = action.payload;
      break;
    default:
      return draft;
  }
}, initialState);

// export default function counterReducer(state = initialState, action) {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...state, count: action.payload.increment };
//     case DECREMENT:
//       return { ...state, count: action.payload.decrement };
//     default:
//       return state;
//   }
// }
