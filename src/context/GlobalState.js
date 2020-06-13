import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  transactions: [],
  updateTransactionList: [],
  isUpdate: false
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  function updateFalse(value){
    dispatch({
      type: 'CHANGE_STATE',
      payload: value
    })
  }

  function updateTransaction(updateTransactionList){

    dispatch({
      type: 'UPDATE_TRANSACTION',
      payload: updateTransactionList
    })
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    isUpdate: state.isUpdate,
    updateTransactionList: state.updateTransactionList,
    deleteTransaction,
    addTransaction,
    updateTransaction,
    updateFalse
  }}>
    {children}
  </GlobalContext.Provider>);
}