import React, {Component}  from 'react';
import { ThemeContext } from './App';

export default class CounterClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count : props.count
        }
    }

    render(){    
        return (
            <ThemeContext.Consumer>
                {style => 
                    (<>
                        <button style={style} onClick={()=>this.changeCount(-1)}>-</button>
                            <h1>{this.state.count}</h1>
                        <button style={style} onClick={()=>this.changeCount(1)}>+</button>
                    </>)
                }
            
            </ThemeContext.Consumer>
      )
    }

    changeCount(amount){
        this.setState(prevState => {console.log(prevState);return {count : prevState.count + amount}})
    }
}
  


