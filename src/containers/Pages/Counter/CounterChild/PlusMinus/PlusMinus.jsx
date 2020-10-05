import React from "react";
import { connect } from "react-redux";
import { ActionType } from "../../../../../Redux/Action/actions";

export class PlusMinus extends React.Component{
    state = {
        count : 0
    }


    sendCounter = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    handlePlus = () => {
        this.setState({count: this.state.count + 1}, () => {
            this.sendCounter(this.state.count)
        })
    }

    handleMinus = () => {
        if(this.state > 0){
            this.setState({count: this.state.count - 1}, () => {
                this.sendCounter(this.state.count)
            })
        }
    }

    render(){
        return (
            <div className="footer">
                <button onClick={this.handleMinus}>-</button>
                <input type="text" value={this.state.count} readOnly/>
                <button onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}


const PlusMinusRedux = (props) => {
    console.log(props)
    
    return (
        <div className="footer">
            <button onClick={props.handleMinus}>-</button>
            <input type="text" value={props.order} readOnly/>
            <button onClick={props.handlePlus}>+</button>
        </div>
    )
    
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: function() {
            dispatch({type: ActionType.PLUS_ORDER})
        },
        handleMinus: () => dispatch({type: ActionType.MINUS_ORDER})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlusMinusRedux)