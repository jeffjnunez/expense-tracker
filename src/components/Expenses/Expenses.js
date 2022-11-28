import { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = value => {
        setFilteredYear(value);
    };

    const filteredExpenses = expenses.filter(expItem => {
        return expItem
            .date
            .getFullYear()
            .toString() === filteredYear;
    });

    let expensesContent = <p>No expenses found.</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = (
            filteredExpenses.map(expItem => (
                <ExpenseItem
                    key={expItem.id}
                    id={expItem.id}
                    title={expItem.title}
                    amount={expItem.amount}
                    date={expItem.date}
                />
            ))
        );
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter
                onFilterChange={filterChangeHandler}
                selected={filteredYear}
            />
            {expensesContent}
        </Card>
    );
};

export default Expenses;