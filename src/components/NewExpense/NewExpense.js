import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        onAddExpense(expenseData);
    };

    const submitFormHandler = () => {
        setShowForm(false);
    };

    const showFormButtonHandler = () => {
        setShowForm(true);
    }

    return (
        <div className='new-expense'>
            {showForm ? (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onSubmitForm={submitFormHandler}
                />
            ) : (
                <button
                    type='button'
                    onClick={showFormButtonHandler}
                >Add New Expense</button>
            )}
        </div>
    );
};

export default NewExpense;