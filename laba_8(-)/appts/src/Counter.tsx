import React from 'react';
import './Counter.css';
import Button from './Button';

interface CounterState {
  clickCount: number;
}

class Counter extends React.Component<{}, CounterState> {
    constructor(props: {}) {
        super(props);
        this.state = {
          clickCount: 0
        };
    
        this.increaseCount = this.increaseCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
      }
    
      increaseCount() {
        this.setState((prevState) => ({
          clickCount: prevState.clickCount + 1
        }), () => {
          if (this.state.clickCount === 6) {
            this.resetCount();
          }
        });
      }
    
      resetCount() {
        this.setState({
          clickCount: 0
        });
      }
    
      render() {
        return (
          <div className="Counter">
            <div className='Counter'>{this.state.clickCount}</div>            
            <Button nameButton='inc' onClickFunction={this.increaseCount} disabled={false}/>
            <Button nameButton='reset' onClickFunction={this.resetCount} disabled={this.state.clickCount === 0}/>
          </div>
        )
      }
}

export default Counter;