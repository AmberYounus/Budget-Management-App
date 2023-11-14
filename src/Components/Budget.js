import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext';
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';

const Budget = () => {

  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  //Edit function
  const handleEditClick = () => {

  }

  //Save Function
  const handleSaveClick = () => {

  }

  return (
    <div className="alert alert-secondary">
      {isEditing ? (<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
      ) : (<ViewBudget handleEditClick={handleEditClick} budget={budget} />)}
      <span>Budget:  €{budget}</span>
    </div>
  )
}
export default Budget;
