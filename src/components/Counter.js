import React, { Component } from 'react';

import Number from './Number.js';
import CounterButton from './CounterButton.js';


class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {totalClicks : 0}
        this.handleClickPositive = this.handleClickPositive.bind(this);
        this.handleClickNegative = this.handleClickNegative.bind(this);
    }
    handleClickPositive = () => {
        const total = this.state.totalClicks;
        this.setState(
            {totalClicks: total + 1}
        );
    }
    handleClickNegative = () => {
        const total = this.state.totalClicks;
        this.setState(
            {totalClicks: total - 1}
        );
    }
    render(){
        return (
            <div>
                <CounterButton onClick={this.handleClickPositive} name={'Add Counter'}/>
                <CounterButton onClick={this.handleClickNegative} name={'Subtract Counter'}/>
                <Number />
            </div>
        )
    }
}

export default Counter;