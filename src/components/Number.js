import React, {Component} from 'react';
import CounterButton from './CounterButton.js';





class Number extends Component {
    constructor(props){
        super(props);
        this.state = { totalClicks: 0};
    }
    handleClickPositive = () => {
        let total = this.state.totalClicks;
        this.setState(
            {totalClicks: total + 1}
        );
    }
    handleClickNegative = () => {
        let total = this.state.totalClicks;
        this.setState(
            {totalClicks: total - 1}
        );
    }
    render(){
        return(
            <div>
                <h1>Number is: {this.state.totalClicks}</h1>
                <CounterButton onClick={this.handleClickPositive} name={'Add Number'} />
                <CounterButton onClick={this.handleClickNegative} name={'Subtract Number'} />
            </div>
        )
    }
}


export default Number;