import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

const Expenses = ({ expenses }) => {
    return (
        <Card className='expenses'>
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