import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import UserFormClass from './components/UserFormClass';
import UserFormFunction from './components/UserFormFunction';

function App() {
  return (
    <div>
      <h1>Week 10 - Events and Forms</h1>
      <Hello />
      <UserFormClass />
      <UserFormFunction />
    </div>
  );
}

export default App;
