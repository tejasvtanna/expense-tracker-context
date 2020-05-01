import React, { useContext } from 'react'
import '../App.css'
import ExpenseItem from '../components/ExpenseItem'
import { FiTrash } from 'react-icons/fi'
import { ExpenseContext } from '../context/ExpenseContext'

function ExpenseList() {
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

   const handleClearAll = () => {
      if (window.confirm('Are you sure you want to clear all items?')) {
         setExpenses([])
         showAlert('success', 'All items cleared')
      }
   }

   return (
      <div>
         {/* {alert.show && <Alert alert={alert} />} */}
         {expenses.map((exp) => (
            <ExpenseItem key={exp.id} expense={exp} />
         ))}

         {expenses.length > 0 && (
            <button className='btn' onClick={handleClearAll}>
               Clear Expenses
               <FiTrash className='btn-icon'></FiTrash>
            </button>
         )}
      </div>
   )
}

export default ExpenseList
