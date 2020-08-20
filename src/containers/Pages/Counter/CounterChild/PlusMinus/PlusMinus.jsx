import React from "react";
import { connect } from "react-redux";
import ActionType from "../../../../../Redux/Reducer/globalActionType";

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


class PlusMinusRedux extends React.Component{
    
    //#region STATE LAMA
    // state = {
    //     count : 0
    // }

    // sendCounter = (newValue) => {
    //     this.props.onCounterChange(newValue)
    // }

    // handlePlus = () => {
    //     this.setState({count: this.state.count + 1}, () => {
    //         this.sendCounter(this.state.count)
    //     })
    // }

    // handleMinus = () => {
    //     if(this.state > 0){
    //         this.setState({count: this.state.count - 1}, () => {
    //             this.sendCounter(this.state.count)
    //         })
    //     }
    // }
    //#endregion

    render(){
        console.log(this.props)
        return (
            <div className="footer">
                <button onClick={this.props.handleMinus}>-</button>
                <input type="text" value={this.props.order} readOnly/>
                <button onClick={this.props.handlePlus}>+</button>
            </div>
        )
    }
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