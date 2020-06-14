import React, {useState} from 'react'
import axios from 'axios'

import {GlobalContext} from '../context/GlobalState'

export const Header = () => {
  const { transactions } = useState(GlobalContext)
  const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const url = 'https://shopapp-c6e3f.firebaseio.com/expanseList.json'

function sendToDataBase() {
  axios.post(url, 
    transactions).then(respon =>{
      console.log(respon)
    }).catch(error =>{
      console.log('Error : ', error)
    })
}

  let [date] = useState(new Date())
  return (
    <div className="headerClass">
      <h2> Expense Tracker for {months[date.getMonth()]} </h2>
      <button onClick={() => sendToDataBase()}> Send To Database </button>
    </div>   
  )
}