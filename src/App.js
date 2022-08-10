import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const Dummy_Data = [
  {
    id:'A1',
    title: 'Car Insuarance',
    amount: 264.56,
    date: new Date(2020, 2, 3),
  },
  {
    id:'A2',
    title: 'Black Book',
    amount: 885.55,
    date: new Date(2021, 3, 14),
  },
  {
    id:'A3',
    title: 'Thor Ranganork',
    amount: 885.55,
    date: new Date(2022, 3, 24),
  }
];

const App = () => {

  const [expenses, setExpenses] = useState(Dummy_Data)

const addExpenseHandler = expense => {
  setExpenses((prevExpense) => {
    return [expense,...prevExpense]
  })
}
// return React.createElement('div',{},React.createElement(Expenses,{items:expenses}))
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}
export default App;