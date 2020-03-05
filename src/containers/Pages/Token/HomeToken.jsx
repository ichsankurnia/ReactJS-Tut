import React, { Component, Fragment } from 'react'
// import {Link} from "react-router-dom";
import axios from "axios";

class HomeToken extends Component{
    state = {
        data: []
    }

    componentDidMount(){
        for (var key in localStorage) {
            console.log(key, " = ", localStorage.getItem(key));
        }

        if(localStorage.getItem('dataAuth') === null){
            this.props.history.push('/login')
        }else if(!localStorage.getItem('open_balance')){
            alert("Please Open Balance First !")
            this.props.history.push('/balance')
        }
        else{
            this.getMenu();
        }

        // if(!localStorage.getItem('open_balance')){
        //     this.props.history.push("/balance");
        // }
    }

    getMenu = () => {
        axios.get(
            `http://dev.nutech-integrasi.com:7010/information/get-menu?terminal_code=${JSON.parse(localStorage.getItem('dataAuth')).terminal_code}`,
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`,
                Accept: "application/json",
                "Content-Type": "application/json"
              }
            }
          ).then(res => {
            console.log(res);
            if (res.data.status !== 0) {
              alert(res.data.message);
              this.props.history.push("/login");
            } else {
              this.setState({ data: res.data.data });
            }
          }).catch(err => {
            console.log(err);
          });
    }

    handleDestroyAuth = () => {
        localStorage.clear();
        // window.location.reload();
        window.location.href = '/login';
        // this.props.history.push('/login')
    }

    render(){

        return(
            <Fragment>
                <h1>Ini Home Token</h1>
                {
                    this.state.data !== false || null?
                        this.state.data.map((data) => {
                            return <li key={data.menu_name}>{data.menu_name}</li>
                        }): null
                }
                <button onClick={() => this.props.history.push('/balance')}>Back</button>
                <button onClick={this.handleDestroyAuth}>Remove Token</button>
            </Fragment>
        )
    }
}

export default HomeToken;