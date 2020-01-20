import React, { Component } from 'react';
// import './../Counter/index.css'

class CounterChild extends Component{
    state = {
        count: 4,
        name: 'Ichsan'
    }

    // fungsi untuk memanggil props dan mengubah value dalam parent class
    sendValue = (newValue) =>{
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            count: this.state.count + 1
        }, () => {
            this.sendValue(this.state.count); //panggil fungsi handle counter change
        })
    }

    handleMinus = () => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            }, () => {
                this.sendValue(this.state.count);
            })
        }
    }

    render(){
        return(
            <div>
                <div className="body-content">
                    <p>Image</p>
                    <p>360x480</p>
                </div>
                <div className="footer">
                    <button onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.count} readOnly/>
                    <button onClick={this.handlePlus}>+</button>
                </div>
            </div>
        )
    }
}

export default CounterChild;

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