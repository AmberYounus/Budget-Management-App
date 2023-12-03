import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './Components/Budget';
import Remaining from './Components/Remaining';
import ExpenseTotal from './Components/ExpenseTotal';
import ExpenseList from './Components/ExpenseList';
import AddExpenseForm from './Components/AddExpenseForm';
import { AppProvider } from './Context/AppContext';

const App = () => {
  return (
    <AppProvider>

      <>
        <div className="container">
          <h1 className="mt-4 text-center bg-secondary text-white ">My Budget Planner</h1>
          <div className="row mt-4">
            <div className="col-sm">
              <Budget />
            </div>
            <div className="col-sm">
              <Remaining />
            </div>
            <div className="col-sm">
              <ExpenseTotal />
            </div>
          </div>
          <div className="row mt-5">
            <div class="col-sm-6">
              <h3 className="mt-3 text-center">Expenses List</h3>
              <div class="card">
                <div class="card-body">
                  <div className="row mt-3">
                    <div className="col-sm">
                      <ExpenseList />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 ">
              <h3 className="mt-3 text-center ">Add Expenses</h3>
              <div class="card h-75 ">
                <div class="card-body">
                  <div className=" mt-3">
    
                    <AddExpenseForm />
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </AppProvider>

  );
}

export default App;
