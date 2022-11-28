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

    return (
        <Card className='expenses'>
            <ExpensesFilter
                onFilterChange={filterChangeHandler}
                selected={filteredYear}
            />
            {expenses.map(expItem => (
                <ExpenseItem
                    key={expItem.id}
                    id={expItem.id}
                    title={expItem.title}
                    amount={expItem.amount}
                    date={expItem.date}
                />
            ))}
        </Card>
    );
};

export default Expenses;