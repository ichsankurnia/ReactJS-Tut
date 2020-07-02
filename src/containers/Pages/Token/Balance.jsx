import React, { Component, Fragment } from 'react'
import axios from "axios";
// import { getToken } from "./GetToken.js";
// import {Link} from "react-router-dom";


class Balance extends Component{
    state = {
        listMenu: []
    }

    componentDidMount(){
        let dataAuth = localStorage.getItem("dataAuth");
        this.postData(JSON.parse(dataAuth))
        // getToken()
    }

    postData = (data) => {
        axios.post("http://dev.nutech-integrasi.com:7010/auth/login-device", data).then((res) => {
            console.log('result:', res)
            if (res.data.status !== 0) {
                // alert(res.data.message)
                this.props.history.push('/login')
            }else{
                localStorage.setItem("token", res.data.data.token);
                this.setState({listMenu: res.data.data.menu_operator})
            }
        }).catch((err) => {
            console.log(err)
            this.postData(data)
        });
    }

    handleMove = (path) => {
        this.props.history.push(`/detail-balance/${path}`)
    }

    handleDestroyAuth = () => {
        localStorage.clear();
        // window.location.href = "/login";
        this.props.history.push('/login')
    }

    render(){
        return(
            <Fragment>
                {
                    this.state.listMenu.map((data) => {
                        return <button key={data.menu_name} onClick={() => this.handleMove(data.menu_name)} >{data.menu_name}</button>
                    })
                }
                <button onClick={this.handleDestroyAuth}>Remove Token</button>
            </Fragment>
        )
    }
}

export default Balance;