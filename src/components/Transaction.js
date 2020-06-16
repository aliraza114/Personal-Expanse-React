import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useAlert } from 'react-alert'

export const Transaction = ({ transaction }) => {
  const { isUpdate ,deleteTransaction, updateTransaction } = useContext(GlobalContext);
  const alert = useAlert()
  const deleteTrans = (id) => {
    deleteTransaction(id)
    alert.show('Transaction Deleted Successfully') 
  }

  return (
    <div className="transaction">
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      <button className={'iconEdit'} disabled={true ? isUpdate : false} onClick={()=> updateTransaction({id: transaction.id, update: true})} > <i class="material-icons">&#xe254;</i> </button> 
      <div className='textClass'> {transaction.text}  </div>
      <span className='dateClass'> { transaction.id.toLocaleDateString() } </span>
      <span> {Math.abs(transaction.amount)}</span>
      <button onClick={() => deleteTrans(transaction.id)} className="delete-btn">x</button>
    </li>
    </div>
  )
}