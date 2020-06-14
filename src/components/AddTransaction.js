import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction, isUpdate } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: new Date(),
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
  }

  return (
    !isUpdate ? <div className='transactionForm'>
      <h3>Add New transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input required className="form-text" type="text" value={ text  } onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input required class='form-text'  type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button disabled={ (text === '' && amount === 0) ? true : false} className={ `${amount > 1 && text !== '' ? 'btnSuccess' : 'btnDanger'}` }>{ amount > 1 ?  'Add Income' : 'Add Expanse' }</button>
      </form>
    </div> : ''
  )
}