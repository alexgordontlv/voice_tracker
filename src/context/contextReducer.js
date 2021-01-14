import transitions from "@material-ui/core/styles/transitions";

const contextReducer = (state, action) => {
  switch (action) {
    case "DELETE_TRANSACTION": {
      return state.filter((t) => t.id !== action.payload);
    }
    case "ADD_TRANSACTION": {
      const transactions = [action.payload, ...state];
      return transactions;
    }
    default: {
      return state;
    }
  }
};

export default contextReducer;
