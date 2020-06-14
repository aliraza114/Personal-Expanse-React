import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { isUpdate ,deleteTransaction, updateTransaction } = useContext(GlobalContext);

  return (
    <div class="transaction">
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      <button disabled={true ? isUpdate : false} onClick={()=> updateTransaction({id: transaction.id, update: true})} className="edit-btn">Edit</button> 
      <div className='textClass'> {transaction.text}  </div>
      <span className='dateClass'> { transaction.id.toLocaleDateString() } </span>
      <span> {Math.abs(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
    </div>
  )
}