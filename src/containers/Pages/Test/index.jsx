import React, {Component} from 'react';
import { connect } from 'react-redux';

class Test extends Component{
    state = {
        // count : 10
        count : this.props.totalCount
    }

    componentDidMount() {
        // setInterval(() => {
        //     this.timer()
        // }, 1000);
        this.interval = setInterval(() => this.timer(), 1000);
    }

    timer = () => {
        if(this.state.count > 0){
            this.setState({
                count: this.state.count - 1
            })
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){
        return(
            <button style={{marginLeft:25, borderRadius:15, width:50, height:50, fontSize:20, fontWeight:"bold"}}>{this.state.count}</button>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        totalCount : state.global.totalOrder
    }
}

export default connect(mapStateToProps)(Test);