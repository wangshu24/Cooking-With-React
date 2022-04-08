import React, {useReducer, useContext} from 'react';
import { ThemeContext } from './App';

function reducer(state, action){
    switch(action.type){
      case 'decrease':
        return {count : state.count-1};
      case 'increase':
        return {count :state.count+1};
      default:
        return state;
    }
  }

export default function Counter({count}) {
    const [state, dispatch] = useReducer(reducer, {count});
    const theme = useContext(ThemeContext);
    console.log(ThemeContext)
    return (
        <>
            <button theme={theme} onClick={()=>{dispatch({type: 'decrease'})}}>-</button>
                <h1>{state.count}</h1>
            <button theme={theme} onClick={()=>{dispatch({type: 'increase'})}}>+</button>
        </>      
    )
}
