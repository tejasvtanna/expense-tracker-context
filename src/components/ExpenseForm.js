import React, { useContext } from 'react'
import '../App.css'
import { MdSend } from 'react-icons/md'
import { ExpenseContext } from '../context/ExpenseContext'
import { v4 as uuid } from 'uuid'

const ExpenseForm = () => {
   const {
      expenses,
      setExpenses,
      editId,
      setEditId,
      charge,
      setCharge,
      amount,
      setAmount,
      showAlert
    } = useContext(ExpenseContext)

   const handleSubmit = (e) => {
      debugger
      e.preventDefault()
      if (charge === '' || amount === 0) {
         showAlert('danger', 'Invalid value')
         // setAlert({ show: true, type: 'danger', text: 'Invalid value' })
         // setTimeout(() => {
         //    setAlert({ show: false })
         // }, 3000)
      } else if (editId === '') {
         const newExpense = { id: uuid(), charge, amount }
         setExpenses([...expenses, newExpense])
         showAlert('success', 'Item added')
         // setAlert({ show: true, type: 'success', text: 'Item added' })
         // setTimeout(() => {
         //    setAlert({ show: false })
         // }, 3000)
         setCharge('')
         setAmount('')
      } else {
         //  const expList = [...expenses]
         //  const idx = expList.findIndex((e) => e.id === editId)
         //  expList[idx].charge = charge
         //  expList[idx].amount = amount
         //  setExpenses(expList)
         const tempExpenses = expenses.map((item) =>
            item.id === editId ? { ...item, charge, amount } : item
         )
         setExpenses(tempExpenses)
         showAlert('success', 'Item edited')
         // setAlert({ show: true, type: 'success', text: 'Item edited' })
         // setTimeout(() => {
         //    setAlert({ show: false })
         // }, 3000)
         setEditId('')
         setCharge('')
         setAmount('')
      }
   }

   return (
      <>
         {/* {alert.show && <Alert />} */}

         <form onSubmit={handleSubmit}>
            <div className='form-center'>
               <div className='form-group'>
                  <label htmlFor='charge'>Charge</label>
                  <input
                     type='text'
                     className='form-control'
                     id='charge'
                     name='charge'
                     placeholder='e.g. rent'
                     value={charge}
                     onChange={(e) => setCharge(e.target.value)}
                  />
               </div>
               <div className='form-group'>
                  <label htmlFor='amount'>Amount</label>
                  <input
                     type='number'
                     className='form-control'
                     id='amount'
                     name='amount'
                     placeholder='e.g. 123'
                     value={amount}
                     onChange={(e) => setAmount(e.target.value)}
                  />
               </div>
            </div>
            <button type='submit' className='btn'>
               {editId !== '' ? 'Edit' : 'Submit'}
               <MdSend className='btn-icon' />
            </button>
            <br />
         </form>
      </>
   )
}

export default ExpenseForm
