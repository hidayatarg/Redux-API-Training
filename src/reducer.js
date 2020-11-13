import { INCREMENT, DECREMENT, RESET } from "./action";

const initalState = {
  count: 0
};

// take current state and action
export default (state = initalState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      };
    case DECREMENT:
      return {
        count: state.count - 1
      };
    case RESET:
      return {
        count: 0
      };
    default:
      return state;
  }
};
