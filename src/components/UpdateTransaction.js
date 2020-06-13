import React, {useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const UpdateTransaction = () => {
    // const [isUpdate, setUpdate] = useState()
    const { isUpdate, updateTransactionList, updateFalse } = useContext(GlobalContext) 
    const [text, setText] = useState(updateTransactionList.text);
    const [amount, setAmount] = useState(updateTransactionList.amount);
    console.log('Update ', isUpdate)
    console.log('Update ', updateTransactionList)
    return (
       isUpdate ?  <div >
           <button onClick={() => updateFalse(false) } > cancel </button>
       <h3>Update Transaction</h3>
       <form >
           <div className="form-control">
           <label htmlFor="text">Text</label>
           <input type="text" value={updateTransactionList.text} onChange= {(e) => setText(e.target.value)} placeholder="Enter text..." />
           </div>
           <div className="form-control">
           <label > Amount Here </label>
           <input type="number" value={updateTransactionList.amount} onChange = {(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
           </div>
           <button className='btnSuccess' > Update</button>
       </form>
       </div> : ''
    )
}