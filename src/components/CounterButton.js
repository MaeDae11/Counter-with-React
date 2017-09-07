import React, {Component} from 'react';


class CounterButton extends Component {

    render(){
        return(
            <button onClick={this.props.onClick}>
                Click Me!
            </button>
        )
    }
}

export default CounterButton;