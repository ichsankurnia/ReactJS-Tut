import React, { Component } from 'react';
import PlusMinusRedux, { PlusMinus } from './PlusMinus/PlusMinus';
// import './../Counter/index.css'

export class CounterChild extends Component{
    state = {
        count: 4,
        name: 'Ichsan'
    }

    // fungsi untuk memanggil props dan mengubah value dalam parent class
    handleCounterChange = (newValue) =>{
        this.props.onCounterChange(newValue);
    }

    render(){
        return(
            <div>
                <div className="body-content">
                    <p>Image</p>
                    <p>360x480</p>
                </div>
                <PlusMinus onCounterChange={this.handleCounterChange} />
            </div>
        )
    }
}


class CounterChildRedux extends Component{
    state = {
        count: 4,
        name: 'Ichsan'
    }

    // fungsi untuk memanggil props dan mengubah value dalam parent class
    handleCounterChange = (newValue) =>{
        this.props.onCounterChange(newValue);
    }

    render(){
        return(
            <div>
                <div className="body-content">
                    <p>Image</p>
                    <p>360x480</p>
                </div>
                <PlusMinusRedux />
            </div>
        )
    }
}


export default CounterChildRedux;


//#region update value in same of class
// class CounterChild extends Component{
//     state = {
//         count: 4,
//         name: 'Ichsan'
//     }

//     handlePlus = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     handleMinus = () => {
//         if (this.state.count > 0) {
//             this.setState({
//                 count: this.state.count - 1
//             })
//         }
//     }
    
//     render(){
//         return(
//             <div>
//                 <div className="body-content">
//                     <p>Image</p>
//                     <p>360x480</p>
//                 </div>
//                 <div className="footer">
//                     <button onClick={this.handleMinus}>-</button>
//                     <input type="text" value={this.state.count} />
//                     <button onClick={this.handlePlus}>+</button>
//                 </div>
//             </div>
//         )
//     }
// }

//#endregion