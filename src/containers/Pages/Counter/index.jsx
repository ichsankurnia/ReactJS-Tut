import React, {Component, Fragment} from 'react';
import "./index.css";
import CounterChild from './CounterChild';

class Counter extends Component{
    state = {
        count: 4,
        name: 'Ichsan'
    }

    handleCounterChange = (newValue) => {
        this.setState({
            count: newValue,
        })
    }

    render(){
        return(
            <Fragment>
                <div className="card">
                    <div className="header">
                        <p>Header</p>
                        <div className="count-head">{this.state.count}</div>
                    </div>
                    <CounterChild onCounterChange={(value) => this.handleCounterChange(value) } />
                </div>
            </Fragment>
        )
    }
}

export default Counter;