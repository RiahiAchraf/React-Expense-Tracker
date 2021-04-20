// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.playload,
        ),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.playload, ...state.transactions],
      };
    default:
      return state;
  }
};
