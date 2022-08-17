import { useSelector, useDispatch } from 'react-redux'
import'./App.css';
import { useState } from 'react';
import { decrementCounter, incrementCounter, incrementByAmount } from './redux/counter/counterActions';

function App() {
  const [input, setInput] = useState('');
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const increaseValue = () => {
    dispatch(incrementCounter())
  }

  const decreaseValue = () => {
    dispatch(decrementCounter())
  }

  const onChangeValue = (event) => {
    if(!Number(event.target.value) && !(Number(event.target.value) === 0)) return;
    setInput(event.target.value)
  }

  const increaseValueByAmount = () => {
    dispatch(incrementByAmount(input))
  }

  return (
    <>
    <div>
      <div style={{
        display: 'flex'
      }}>
        <button onClick={decreaseValue}>
          -
        </button>
        <p style={{ maxHeight: '5px', margin: 0}}>
          {counter}
        </p>
        <button onClick={increaseValue}>
          +
        </button>
      </div>
    </div>
    <div>
      <input value={input} onChange={onChangeValue}></input>
      <button onClick={increaseValueByAmount}>Add amount</button>
    </div>
    </>
  );
}

export default App;
