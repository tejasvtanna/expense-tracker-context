import React, { useContext } from 'react'
import '../App.css'
import { MdEdit, MdDelete } from 'react-icons/md'
import { ExpenseContext } from '../context/ExpenseContext'

const ExpenseItem = ({ expense }) => {
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
      showAlert
   ] = useContext(ExpenseContext)

   // console.log(useContext(ExpenseContext))

   const handleEdit = (id) => {
      debugger
      setCharge(expenses.find((e) => e.id === id).charge)
      setAmount(expenses.find((e) => e.id === id).amount)
      setEditId(id)
   }

   const handleDelete = (id) => {
      const expList = expenses.filter((e) => e.id !== id)
      setExpenses(expList)

      showAlert('success', 'Item deleted')
      // setAlert({ show: true, type: 'success', text: 'Item deleted' })
      // setTimeout(() => {
      //    setAlert({ show: false })
      // }, 3000)
   }

   return (
      <li className='item'>
         <div className='info'>
            <span className='expense'>{expense.charge}</span>
            <span className='amount'>${expense.amount}</span>
         </div>
         <div>
            <button
               className='edit-btn'
               aria-label='edit button'
               onClick={() => handleEdit(expense.id)}
            >
               <MdEdit />
            </button>
            <button
               className='clear-btn'
               aria-label='delete button'
               onClick={() => handleDelete(expense.id)}
            >
               <MdDelete />
            </button>
         </div>
      </li>
   )
}

export default ExpenseItem
