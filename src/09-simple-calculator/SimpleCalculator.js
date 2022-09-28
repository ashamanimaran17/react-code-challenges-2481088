import { useReducer } from "react";
const initialState = {num1: 0, num2: 0, ans: 0}

function reducer (state, action) {
switch(action.type){
  case "num1": 
  return ({...state, num1: parseInt(action.payload)});
  case "num2": 
  return ({...state, num2: parseInt(action.payload)});
  case "add":
  return ({...state, ans: state.num1 + state.num2});
  case "subtract":
  return ({...state, ans: state.num1 - state.num2});  
  case "cancel":
  return ({...state, num1: 0, num2: 0, ans: 0}); 
  default:
  return state;
}
}
export default function SimpleCalculator () {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const[state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map(number => (
          <button key={number} onClick={() => dispatch({type:"num1", payload: number})}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map(number => (
          <button key={number} onClick={() =>dispatch({type:"num2", payload: number})}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={() =>dispatch({type:"add"})}>+</button>
        <button onClick={() =>dispatch({type:"subtract"})}>-</button>
        <button onClick={() =>dispatch({type:"cancel"})}>c</button>
      </div>
      <div><h2>Result: {state.ans}</h2></div>
    </div>
  )
}
