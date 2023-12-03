import React, { useState ,useContext} from "react";
import { AppContext } from "../Context/AppContext";
import {v4 as uuidv4} from 'uuid';

const AddExpenseForm = () => {

    const {dispatch} = useContext(AppContext);

    const [name,setName] = useState('');
    const [cost,setCost] = useState('');


    const onSubmit = (event) => {
        event.preventDefault();
    // alert("name " + name + " cost " + cost)

        const expense ={
            id:uuidv4(),
            name,
            cost:parseInt(cost),
        }
        dispatch({
            type:"ADD_EXPENSE",
            payload:expense,
        })
        setName('');
        setCost('');
    }

    
    return(
        //Add Expense Items
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm ">
                    <label htmlFor="name">Expense Category</label>
                    <input type="text" required='required' className="form-control w-100" id="name" 
                       value={name} onChange={(event)=>setName(event.target.value)} />
                </div>
                <div className="col-sm">
                    <label htmlFor="cost">Cost</label>
                    <input type="number" required='required' className="form-control w-100" id="cost" 
                        value={cost} onChange={(event)=>setCost(event.target.value)} />
                </div>
            </div>
              
                <div className="col-sm">
                    <button type="submit" className="btn btn-outline-primary btn-lg btn-block text-center mt-3">Save</button>
                </div>
            
        </form>
    )
}
export default AddExpenseForm;