import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = ({ expenses }) => {
    return (
        <div className='expenses'>
            {expenses.map(expItem => (
                <ExpenseItem
                    key={expItem.id}
                    id={expItem.id}
                    title={expItem.title}
                    amount={expItem.amount}
                    date={expItem.date}
                />
            ))}
        </div>
    );
};

export default Expenses;