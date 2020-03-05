import React, { Component, Fragment } from 'react'
import axios from 'axios';

const ModalOB = (props) => {
    return(
        <div className="form-add-section">
            <h1>{props.title}</h1>
            <h3>Assignment Code : {props.ass_code}</h3>
            <p>Cash In : {props.cash_in}</p>
            <p>Card In : {props.card_in}</p>
            <button style={{marginTop: 20}} onClick={props.onClick}>Confirm</button>
        </div>
    )
}

const ModalCB = (props) => {
    return(
        <div className="form-add-section">
            <h1>{props.title}</h1>
            <h3>Assignment Code : {props.ass_code}</h3>
            <p>Cash Out : {props.cash_out}</p>
            <p>Card Out : {props.card_out}</p>
            <button style={{marginTop: 20}} onClick={props.onClick}>Confirm</button>
        </div>
    )
}

const ModalCC = (props) => {
    return(
        <div className="form-add-section">
            <h1>{props.title}</h1>
            <h3>Assignment Code : {props.ass_code}</h3>
            <p>Cash Out : {props.cash_out}</p>
            <button style={{marginTop: 20}} onClick={props.onClick}>Confirm</button>
        </div>
    )
}

const ModalUS = (props) => {
    return(
        <div className="form-add-section">
            <h1>{props.title}</h1>
            <h3>Assignment Code : {props.ass_code}</h3>
            <p>Cash Update : {props.card_upd}</p>
            <p>Cash Before : {props.card_bef}</p>
            <p style={{marginTop: 10, fontWeight: 'bold'}}>Cash After : {props.card_aft}</p>
            <button style={{marginTop: 20}} onClick={props.onClick}>Confirm</button>
        </div>
    )
}

class DetailBalance extends Component{
    state = {
        api: '',
        menuName: '',
        username: JSON.parse(localStorage.getItem('dataAuth')).username,
        ass_code: '',
        trl_code: JSON.parse(localStorage.getItem('dataAuth')).terminal_code,
        jsonBody:{
            username: "",
            assignment_code : "",
            terminal_code: ""
        },
        showModal: false,
        dataMenu: [],
    }

    componentDidMount(){
        console.log(this.props.match)

        let menu = this.props.match.params.menu
        if(menu=== "Opening Balance"){
            if(localStorage.getItem('open_balance')==="true"){
                console.log("sudah open balance");
                this.props.history.push('/hometoken')
            }
        }

        let url = ""
        switch (menu) {
            case "Opening Balance": url = "http://dev.nutech-integrasi.com:7010/transaction/opening-balance"; break;
            case "Closing Balance": url = "http://dev.nutech-integrasi.com:7010/transaction/closing-balance"; break;
            case "Cash Collection": url = "http://dev.nutech-integrasi.com:7010/transaction/cash-collect"; break;
            case "Update Stock":    url = "http://dev.nutech-integrasi.com:7010/transaction/update-stock"; break;
            default: break;
        }

        this.setState({menuName: menu, api: url}, () => console.log(this.state))

    }

    postData = (data) => {
        axios.post(this.state.api, data, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.log(res.data)
            if(res.data.status !== 0){
                console.log(this.state.jsonBody);
                alert(res.data.message)
                if (res.data.status === 107 || res.data.status === 108){       // unauthorization
                    this.props.history.push('/login')
                }
            }else{
                switch (this.state.menuName) {
                    case "Opening Balance":
                        // this.setState({cash_in: res.data.data.cash_in, card_in: res.data.data.card_in}, () => { this.OBModalTimeout(); })
                        localStorage.setItem("open_balance", true)
                        localStorage.setItem("assignment_code", this.state.jsonBody.assignment_code);
                        this.setState({dataMenu: res.data.data, showModal: true})
                        break;
                    case "Closing Balance": 
                        localStorage.setItem('open_balance', false)
                        localStorage.setItem('assignment_code', null)
                        this.setState({dataMenu: res.data.data, showModal: true})
                        break;
                    case "Cash Collection":
                        this.setState({dataMenu: res.data.data, showModal: true})
                        break;
                    case "Update Stock":
                        this.setState({dataMenu: res.data.data, showModal: true})
                        break;
                    default: break;
                }
            }
        }).catch((err) => {
            console.log(err);
            this.postData(data);
        })
    }

    handleSubmit = () => {
        var newData = {...this.state.jsonBody}; //copy seluru obj ke formAddNew
        newData["username"] = this.state.username;
        newData["assignment_code"] = this.state.ass_code;
        newData["terminal_code"] = this.state.trl_code;
        this.setState({jsonBody: newData}, () => {
            this.postData(this.state.jsonBody)
        })
    }

    showModal = () => {
        switch (this.state.menuName) {
            case "Opening Balance": 
                return <ModalOB 
                        title={this.state.menuName}
                        ass_code={this.state.ass_code}
                        cash_in={this.state.dataMenu.cash_in}
                        card_in={this.state.dataMenu.card_in} 
                        onClick={this.handleMove} />
            case "Closing Balance":
                return <ModalCB 
                        title={this.state.menuName}
                        ass_code={this.state.ass_code}
                        cash_out={this.state.dataMenu.cash_out}
                        card_out={this.state.dataMenu.card_out} 
                        onClick={this.handleMove} />
            case "Cash Collection":
                return <ModalCC 
                        title={this.state.menuName}
                        ass_code={this.state.ass_code}
                        cash_out={this.state.dataMenu.cash_out}
                        onClick={this.handleMove} />
            case "Update Stock":
                return <ModalUS
                        title={this.state.menuName}
                        ass_code={this.state.ass_code}
                        card_upd={this.state.dataMenu.card_update}
                        card_bef={this.state.dataMenu.card_before} 
                        card_aft={this.state.dataMenu.card_after} 
                        onClick={this.handleMove} />
            default:
                return null
        }
    }

    handleMove = () => {
        if(this.state.menuName === "Opening Balance"){
            this.props.history.push('/hometoken')
        }else{
            this.props.history.push('/balance')
        }
    }

    render(){
        return(
            <Fragment>
                <h1>{this.state.menuName}</h1>
                <div>
                    <label>Assignment Code : </label>
                    <input type="text" value={this.state.ass_code} onChange={(e) => this.setState({ass_code: e.target.value})} />
                    <button onClick={this.handleSubmit} >Submit</button>
                </div>
                <button onClick={() => this.props.history.push('/balance')}>Back</button>
                {
                    this.state.showModal?
                        this.showModal(): null
                }
            </Fragment>
        )
    }
}

export default DetailBalance;