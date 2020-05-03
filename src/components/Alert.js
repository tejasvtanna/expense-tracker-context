import React from 'react'
import '../App.css'
import { useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'

const Alert = () => {
    const { alert } = useContext(ExpenseContext)

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
