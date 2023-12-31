import React, { useContext, useEffect, useState } from "react";
import ExpenseItem from './ExpenseItem';
import { AppContext } from "../Context/AppContext";

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

    useEffect(() => {
        setFilteredExpenses(expenses)
    }, [expenses])

    //To Search the expense Items
    const handleChange = (event) => {
        const searchResults = expenses.filter((filteredExpense) =>
            filteredExpense.name.toLowerCase().includes(event.target.value)
        )
        setFilteredExpenses(searchResults)
    }
    return (
        <>
     
            <input type="text" onChange={handleChange} className="form-control mb-2 mr-sm-2 bg-light"
                placeholder="Type to search items" />
            <ul className="list-group mt-3 mb-3 ">

                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        id={expense.id}
                        name={expense.name}
                        cost={expense.cost} />
                ))}
            </ul>
           
        </>
    )
}
export default ExpenseList;
