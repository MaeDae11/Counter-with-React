import React, { Component } from 'react';

import Number from './Number.js';
import CounterButton from './CounterButton.js';


class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {totalCounters : 0}
    }
    handleAddCounter = () => {
        const total = this.state.totalCounters;
        this.setState(
            {totalCounters: total + 1}
        );
    }
    handleSubtractCounter = () => {
        const total = this.state.totalCounters;
        this.setState(
            {totalCounters: total - 1}
        );
    }

    render(){
        
        let counter = []
        for(let i=0; i < this.state.totalCounters; i++){
            counter.push(<Number className={i}/>)
        }

        return (
            <div>
                <CounterButton onClick={this.handleAddCounter} name={'Add Counter'}/>
                <CounterButton onClick={this.handleSubtractCounter} name={'Subtract Counter'}/>
                {counter}
            </div>
        )
    }
}

export default Counter;