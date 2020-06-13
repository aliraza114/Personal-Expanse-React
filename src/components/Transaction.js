import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction, updateTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  let isUpdate = false

  function trick(id) {
    isUpdate = true
    console.log(id)
  }

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      <button disabled={true ? isUpdate : false} onClick={()=> updateTransaction({id: transaction.id, update: true})} className="edit-btn">Edit</button> 
      {transaction.text} 
      <span> {Math.abs(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}