import React from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import { ExpenseProvider } from './context/ExpenseContext'
import ExpenseTotal from './components/ExpenseTotal'
import Alert from './components/Alert'

function App() {
   return (
      <>
         <ExpenseProvider className='App'>
            <Alert />
            <h1>Expense Tracker</h1>
            <main className='App'>
               <ExpenseForm />
               <ExpenseList />
            </main>
            <ExpenseTotal />
         </ExpenseProvider>
      </>
   )
}

export default App
