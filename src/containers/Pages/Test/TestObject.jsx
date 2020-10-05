import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setKTPData, updateKTPData, testUpdateState } from "../../../Redux/Action/actions";

const item = {
    nama: "Ichsan Kurniawan",
    nik: "1304141410970001",
    telp: "081234567890"
}


class TestObject extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            key: "",
            value: ""
        }
    }

    componentDidMount(){
        console.log(this.props)
    }

    handleClick = (e) => {
        console.log(item)
        this.setState(item)
        this.props.setKTPData(item)
        this.props.testUpdateState(item)
    }

    handleUpdateState = () => {
        const newKTP = {...this.state}
        newKTP[this.state.key] = this.state.value
        this.setState(newKTP)
        this.props.updateKTPData(this.state.key, this.state.value)
    }


    componentDidUpdate(){
        console.log(this.state)
        console.log(this.props)
    }

    render(){
        return (
            <div>
                <button onClick={this.handleClick} >Set State</button>
                <div>
                    <div>
                        <label>Key : </label>
                        <input value={this.state.key} onChange={(e) => this.setState({key: e.target.value})} />
                    </div>
                    <div>
                        <label>Value : </label>
                        <input value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} />
                    </div>
                    <button onClick={this.handleUpdateState}>Change State PerObject</button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        allState: state,
        ektp: state.ektp
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setKTPData, updateKTPData, testUpdateState}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(TestObject)