import ExpenseItem from './components/ExpenseItem';

const App = () => {
    const exp = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: 'e2',
            title: 'New TV',
            amount: 799.49,
            date: new Date(2021, 2, 12)
        },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];

    return (
        <div>
            <h2>Let's get started!</h2>
            <p>This is also visible.</p>
            <ExpenseItem id={exp[0].id} title={exp[0].title} amount={exp[0].amount} date={exp[0].date} />
            <ExpenseItem id={exp[1].id} title={exp[1].title} amount={exp[1].amount} date={exp[1].date} />
            <ExpenseItem id={exp[2].id} title={exp[2].title} amount={exp[2].amount} date={exp[2].date} />
            <ExpenseItem id={exp[3].id} title={exp[3].title} amount={exp[3].amount} date={exp[3].date} />
        </div>
    );
}

export default App;