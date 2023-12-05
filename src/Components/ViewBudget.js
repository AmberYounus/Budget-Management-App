import React from "react";

const ViewBudget = (props) => {
    //total Budget of Expenses 
    return (
        <>
            <span> Total Budget : £{props.budget}</span>
            <button type="button" className="btn btn-light" onClick={props.handleEditClick}>
                Edit
            </button>
        </>
    )
}

export default ViewBudget;