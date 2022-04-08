import Counter from './Counter';
import CounterClass from './CounterClass';
import React, {useState} from 'react';


export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('red');

  return (
    <ThemeContext.Provider value={{backgroundColor: theme}}>
      Counter with Class
      <CounterClass count={0} />
      Counter with Reducer
      <Counter count={0}/>
      <button onClick={()=>{
        setTheme(prevTheme=>{return prevTheme === 'red'? 'blue' : 'red'})
        }}>TOGGLE THEME</button>
    </ThemeContext.Provider>
  );

}

export default App;
