import React, { useContext } from 'react'
import '../App.css'
import { ExpenseContext } from '../context/ExpenseContext'

const ExpenseTotal = () => {
   const [expenses] = useContext(ExpenseContext)

   return (
      <h1>
         Total Spending:
         <span className='total'>
            {expenses.reduce((acc, curr) => acc + parseInt(curr.amount), 0)}
         </span>
      </h1>
   )
}

export default ExpenseTotal
