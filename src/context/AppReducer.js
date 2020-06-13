export default (state, action) => {
    console.log(action)
    switch(action.type) {
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }
      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [action.payload, ...state.transactions]
        }
      case 'UPDATE_TRANSACTION':
        return {
          ...state,
          // transactions: state.updateTransaction.filter(transaction => transaction.id === action.payload.id),
          updateTransactionList: state.transactions.find(transaction => transaction.id === action.payload.id),
          isUpdate: state.isUpdate = action.payload.update
        }
        case 'CHANGE_STATE':{
          return {
            ...state,
            isUpdate: state.isUpdate = action.payload
          }
        }
      default:
        return state;
    }
  }