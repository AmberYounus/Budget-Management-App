
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './Components/Budget';
import Remaining from './Components/Remaining';

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
    </div>
    </div>
    </>
  );
}

export default App;
