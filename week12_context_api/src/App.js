import logo from './logo.svg';
import './App.css';
import EmployeeContext from './EmployeeContext';
import Home from './components/Home';
import Employee from './components/Employee';
import { useState } from 'react';

const employee = {
  eid: 1,
  firstname: 'John',
  lastname: 'Smith',
  salary: 50000,
  display: function() {
    return this.firstname + ' ' + this.lastname;
  },
  setName: function(fnm) {
    this.firstname = fnm;
  }
}

function App() {
  const[emp,setEmp] = useState(employee);
  return (
    <div>
      <h1>React Context API Example</h1>
      <EmployeeContext.Provider value={employee}>
          <Home />
          <Employee/>
      </EmployeeContext.Provider>
    </div>
  );
}

export default App;