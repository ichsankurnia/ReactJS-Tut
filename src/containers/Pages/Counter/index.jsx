import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import "./index.css";
import CounterChildRedux, { CounterChild } from './CounterChild';

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
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <div className="card">
                        <div className="header">
                            <p>Update by Normal Props</p>
                            <div className="count-head">{this.state.count}</div>
                        </div>
                        <CounterChild onCounterChange={(value) => this.handleCounterChange(value) } />
                    </div>
                    <div className="card">
                        <div className="header">
                            <p>Update by Redux</p>
                            <div className="count-head">{this.props.order}</div>
                        </div>
                        <CounterChildRedux />
                    </div>
                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        order: state.global.totalOrder
    }
}


export default connect(mapStateToProps)(Counter);