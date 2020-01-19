import React, { Component } from 'react';
import './index.css'

class LifeCycleComp extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 1
        }
        console.log('Constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps');
        console.log(state);
        return null;
    }

    // Function berjalan setelah component dirender atau dimunculkan
    componentDidMount(){
        console.log('componentDidMount');
        setTimeout(() => {
            this.setState({
                count: 2
            })
        }, 3000);
    }

    // confirmasi update component, untuk lanjut ke tahap berikutnya
    shouldComponentUpdate(nextProps, nextState){
        console.group('shouldComponentUpdate');
        console.log('this state: ', this.state);
        console.log('nextState: ', nextState);
        console.groupEnd();
        if(this.state.count >= 4){
            return false;
        }
        return true; // saat ingin mengupdate component (ex: value), harus return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate');
        console.log(prevState);
        return null;
    }

    // setelah component di update
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate');
        console.log(prevState, snapshot)
    }

    // saat component dihilangkan dalam halaman/ class ini hilang dari halaman home/ class ini bernilai false
    componentWillUnmount() {
        console.log('componentWillUnmount, LifeCycleComponent Unmount');
        this.setState({
            count: 1
        })
    }

    plusCount = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        console.log('Render');
        return(
            <button className="btn" onClick={this.plusCount}>Component {this.state.count}</button>
        )
    }
}

export default LifeCycleComp;

//#region Urutan LifeCycle React saat di buka pertama kali pada sebuah component/ class
// Constructor
// getDerivedStateFromProps
// Render                                               => munculkan component
// componentDidMount
//#endregion



//#region Jika terjadi update pada components

/* Mounting */
// Constructor
// getDerivedStateFromProps(props, state)
// > {count: 1} // state
// Render                                               => munculkan component
// componentDidMount                                    => update component

/* Updating */
// getDerivedStateFromProps(props, state)
// >{count: 2} // state
// shouldComponentUpdate(nextProps, nextState)          => true
// >{count: 2} // nextstate
// Render                                               => munculkan lagi component
// getSnapshotBeforeUpdate(prevProps, prevState)
// >{count: 1} // prevstate
// componentDidUpdate(prevProps, prevState, snapshot)
// >{count: 1} null // prevstate, snaphot

//#endregion



//#region LifeCycle yg sering digunakan pada React
// constructor
// render
// componentDidMount
// componentDidUpdate
// componentWillUnmount
//#endregion