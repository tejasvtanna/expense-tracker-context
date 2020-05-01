import React from 'react'
import '../App.css'
import { useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'

const Alert = () => {
   const [
      expenses,
      setExpenses,
      editId,
      setEditId,
      charge,
      setCharge,
      amount,
      setAmount,
      alert,
      setAlert,
      showAlert,
   ] = useContext(ExpenseContext)

   debugger

   return (
      <>
         {alert.show && (
            <div className={`alert alert-${alert.type}`}>{alert.text}</div>
         )}
      </>
   )
}

export default Alert
