import React, {Component} from 'react';


class CounterButton extends Component {

    render(){
        return(
            <button className="button" onClick={this.props.onClick}>
                {this.props.name}!
            </button>
        )
    }
}

export default CounterButton;