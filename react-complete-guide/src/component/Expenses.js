import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from './Card';

function Expenses(props) {

    const expenseItems = [];

    for(let i = 0; i < props.items.length; i++) {
        const expenseItem = (<ExpenseItem 
            title={props.items[i].title}
            amount={props.items[i].amount}
            date={props.items[i].date}
        />)

        expenseItems.push(expenseItem);
    }

    return (
        <Card className='expenses'>
            {expenseItems}
        </Card>
    );
}

export default Expenses;