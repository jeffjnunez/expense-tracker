import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ expItems }) => {
    if (expItems.length === 0) {
        return (
            <h2 className='expenses-list__fallback'>No expenses found.</h2>
        );
    }

    return (
        <ul className='expenses-list'>
            {expItems.map(expItem => (
                <ExpenseItem
                    key={expItem.id}
                    id={expItem.id}
                    title={expItem.title}
                    amount={expItem.amount}
                    date={expItem.date}
                />
            ))}
        </ul>
    );
};

export default ExpensesList;