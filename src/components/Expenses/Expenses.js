import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
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

    return (
        <Card className='expenses'>
            <ExpensesFilter
                onFilterChange={filterChangeHandler}
                selected={filteredYear}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expItems={filteredExpenses} />
        </Card>
    );
};

export default Expenses;