import './Expenses_List.css'
import React from 'react';
import ExpenseItem from './ExpenseItem'

const ExpensesList = props =>{
        let expensesContent = <p className='No-item'>No Expenses Found..</p>

if(props.items.length === 0){
  return expensesContent;
}

return <ul className='expenses-List'>
   {props.items.map(expense =>
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date} />
  )}
</ul>
}
export default ExpensesList;