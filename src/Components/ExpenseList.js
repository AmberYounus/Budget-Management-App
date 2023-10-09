import React from "react";

import ExpenseItem  from './Components/ExpenseItem';

const ExpenseList = () => {
        const expenses =[
            {id:1212122,name:"shopping",cost:50},
            {id:1212122,name:"shopping",cost:50},
            {id:1212122,name:"shopping",cost:50},
            {id:1212122,name:"shopping",cost:50},
            {id:1212122,name:"shopping",cost:50},

        ]
        return(
            <ul>
                {expenses.map((expense) => {
                    <ExpenseItem 
                    id={expense.id}
                    name={expense.name}
                    cost={expense.cost}/>
                })}
            </ul>
        )
}
export default ExpenseList;
