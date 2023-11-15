import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext';
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';

const Budget = () => {

  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  //Edit function
  const handleEditClick = () => {
    setIsEditing(true);
  }

  //Save Function
  const handleSaveClick = (value) => {
    dispatch({
      type:'SET_BUDGET',
      payload:value,
    })
    setIsEditing(false)
  }

  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      {isEditing ? (<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
      ) : (<ViewBudget handleEditClick={handleEditClick} budget={budget} />)}
      {/* <span>Budget:  €{budget}</span> */}
    </div>
  )
}
export default Budget;
