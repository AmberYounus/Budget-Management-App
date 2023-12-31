import React, { useState } from "react";

const EditBudget = (props) => {
    const [value, setValue] = useState(props.budget);

    return (
        //Edit the budget Value
        <>
            <input required='required'
                type="number" className="form-control mr-3"
                id="name" value={value}
                onChange={(event) => setValue(event.target.value)} />

            <button type="button" onClick={() => props.handleSaveClick(value)}
                className="btn btn-light ">Save</button>
        </>
    )
}
export default EditBudget;