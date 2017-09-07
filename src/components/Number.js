import React, {Component} from 'react';







class Number extends Component {
    constructor(props){
        super(props);
    
        this.state = { totalClicks: 0};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const total = this.state.totalClicks;

        this.setState(
            {totalClicks: total + 1}
        );
    }

    numberIncreaser = (num) => {
        return num++
    }

    render(){
        return(
            <div className="Number">
                <h1>{numberIncreaser}</h1>
            </div>
        )
    }
}


export default Number;