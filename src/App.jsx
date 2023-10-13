
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './Components/Budget';
import Remaining from './Components/Remaining';
import ExpenseTotal from './Components/ExpenseTotal';
import ExpenseList from './Components/ExpenseList';
import AddExpenseForm from './Components/AddExpenseForm';


const  App = () => {
  return (
   <>
   <div className="container">
    <div className="mt-3">My Budget PLanner</div>
    <div className="row mt-3">
      <div className="col-sm">
        <Budget/>
      </div>
      <div className="col-sm">
        <Remaining/>
      </div>
      <div className="col-sm">
       <ExpenseTotal/>
      </div>
    </div>
    <h3 className="mt-3">Expenses</h3>
    <div className="row mt-3">
      <div className="col-sm">
        <ExpenseList/>
      </div>
    </div>
    <h3 className="mt-3">Add Expenses</h3>
    <div className=" mt-3">
      <div className="col-sm">
        <AddExpenseForm/>
      </div>
    </div>
    </div>
    </>
  );
}

export default App;
