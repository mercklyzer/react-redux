import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, login} from './actions'

function App() {
  const counter = useSelector((state) => state.counter)
  const isLoggedIn = useSelector((state) => state.user)
  const dispatch = useDispatch()



  return (
    <div className="App">
      <div>Counter: {counter}</div>
      {isLoggedIn && <div>User is logged in. </div>}
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(login())}>LOG IN</button>
      </div>
    </div>
  );
}

export default App;
