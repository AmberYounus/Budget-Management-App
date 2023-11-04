import React, { useState } from "react";

const AddExpenseForm =()=>{
    const [name,setName]= useState('');
    const [cost,setCost]= useState('');

    const onSubmit =(event)=>{
        event.preventDefault();
        alert("name "+name +" cost"+cost)
    }
    return(
        <form>
            <div className="row">
                <div className="col-sm">
                    <label htmlFor="name">Name</label>
                    <input type="text" required='required' className="form-control" id="name" value={name} onChange={(event)=>{setName(event.target.value)}} />
                </div>
                <div className="col-sm">
                    <label htmlFor="cost">Cost</label>
                    <input type="text" required='required' className="form-control" id="cost" value={cost} onChange={(event)=>{setCost(event.target.value)}} />
                </div>
                <div className="col-sm">
                   <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </div>
        </form>
    )
}
export default AddExpenseForm;