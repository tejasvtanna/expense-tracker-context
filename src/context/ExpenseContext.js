import React, { createContext, useState, useEffect } from 'react'

export const ExpenseContext = createContext()

export const ExpenseProvider = (props) => {
    // const initialExpenses = [
    //    { id: uuid(), charge: 'rent', amount: 1600 },
    //    { id: uuid(), charge: 'car payment', amount: 400 },
    // ]
    const initialExpenses = localStorage.getItem('expenses')
        ? JSON.parse(localStorage.getItem('expenses'))
        : []

    const [expenses, setExpenses] = useState(initialExpenses)
    const [editId, setEditId] = useState('')
    const [charge, setCharge] = useState('')
    const [amount, setAmount] = useState('')
    const [alert, setAlert] = useState('')

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses))
    }, [expenses])

    const showAlert = (type, text) => {
        debugger
        setAlert({ show: true, type, text })
        setTimeout(() => {
            setAlert({ show: false })
        }, 3000)
    }

    return (
        <ExpenseContext.Provider
            value={{
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
            }}
        >
            {props.children}
        </ExpenseContext.Provider>
    )
}
