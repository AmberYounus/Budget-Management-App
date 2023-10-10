import React from "react";

const AddExpenseForm =()=>{
    return(
        <form>
            <div className="row">
                <div className="col-sm">
                    <label htmlFor="name">Name</label>
                    <input type="text" required='required' className="form-control" id="name" />
                </div>
            </div>
        </form>
    )
}
export default AddExpenseForm;