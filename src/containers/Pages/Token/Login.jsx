import React, { Component, Fragment } from 'react'
import axios from "axios";
import CryptoJS from "crypto-js";

let auth = {
    "username": "ondol",
    "terminal_code": "01038002",
    "password": "+xvn26dGnY0Muaue3JlEbA=="
}

const postDataLogin = async (data) => {
    const res = await axios.post("http://dev.nutech-integrasi.com:7010/auth/login-device", data)
    console.log(data)

    console.log(res)
    return res

}

class Login extends Component{
    state = {
        usn: "balikpapan01",
        pwd: "admin123",
        trl: "N0000001",
        dataLogin : {
            "username": "balikpapan01",
            "terminal_code": "N0000001",
            "password": "+xvn26dGnY0Muaue3JlEbA=="
        }
    }

    componentDidMount(){
        if(localStorage.getItem('dataAuth') != null){
            this.props.history.push('/balance')
        }else{
            localStorage.clear();
        }
        console.log("login")
    }

    postLogin = (data) => {
        axios.post("http://dev.nutech-integrasi.com:7010/auth/login-device", data).then((res) => {
            console.log('result:', res)
            if (res.data.status !== 0) {
                alert(res.data.message)
                // window.location.reload();
            }else{
                console.log(this.state.dataLogin)
                localStorage.setItem("dataAuth", JSON.stringify(data));
                // this.props.history.push('/balance')
                window.location.href="/balance"
            }
        }).catch((err) => {
            console.log(err)
        });
    }

    handleSubmit = async () => {
        // var newData = {...this.state.data}; //copy seluru obj ke formAddNew
        // var encrypted = this.encryptAes(this.state.pwd)
        // newData['username'] = this.state.usn;
        // newData["terminal_code"] = this.state.trl;
        // newData["password"] = encrypted;
        // this.setState({
        //     dataLogin: newData
        // }, () => {
        //     console.log(this.state)
        //     this.postLogin(this.state.dataLogin)
        // })

        try {
            auth.username = await this.state.usn
            auth.password = await this.encryptAes(this.state.pwd)
            auth.terminal_code = await this.state.trl;
    
            // this.postLogin(auth)
            const res = await postDataLogin(auth)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }


    // AES ENCRYPT
    encryptAes = (plainText, urlSafe = false) => {
        let aesKey = 'uDksiapWqiIeiZks';
        let aesIv = 'PoIyBFgsXAqLUHjV';
        let key = CryptoJS.enc.Utf8.parse(aesKey);
        let iv = CryptoJS.enc.Utf8.parse(aesIv);
        try {
            let chiperText = CryptoJS.AES.encrypt(plainText, key, { iv: iv });
            let base64 = chiperText.toString();

            if (urlSafe){
                base64 = base64.replace(/\+/g, '-');
                base64 = base64.replace(/\//g, '_');
            }

            return base64;
        }
        catch(err) {
            console.log(err);
            return false;
        }
    }

    // AES DECRYPT
    decryptAes = (chiperText, urlSafe = false) => {
        let aesKey = 'uDksiapWqiIeiZks';
        let aesIv = 'PoIyBFgsXAqLUHjV';
        let key = crypto.enc.Utf8.parse(aesKey);
        let iv = crypto.enc.Utf8.parse(aesIv);

        try {
            if (urlSafe) {
                chiperText = chiperText.replace(/\-/g, '+');    //eslint-disable-line
                chiperText = chiperText.replace(/\_/g, '/');    //eslint-disable-line
            }

            let plainText = crypto.AES.decrypt(chiperText, key, {iv:iv});
            
            return plainText.toString(crypto.enc.Utf8);
        }
        catch(err) {
            // console.log(err);
            return false;
        }
    }

    render(){
        return(
            <Fragment>
                <h1>Auth Login</h1>
                <input type="text" name="usn" value={this.state.usn} onChange={(e) => this.setState({usn: e.target.value})} />
                <input type="text" name="pwd" value={this.state.pwd} onChange={(e) => this.setState({pwd: e.target.value})} />
                <button onClick={this.handleSubmit}>Submit</button>
            </Fragment>
        )
    }
}

export default Login;