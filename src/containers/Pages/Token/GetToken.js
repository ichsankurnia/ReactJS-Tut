import axios from 'axios';

const postData = (data) => {
    axios.post("http://dev.nutech-integrasi.com:7010/auth/login-device", data).then((res) => {
        console.log('result:', res)
        if (res.data.status !== 0) {
            alert(res.data.message)
            localStorage.setItem("token", res.data.data.token);
        }else{
            this.setState({listMenu: res.data.data.menu_operator})
        }
    }).catch((err) => {
        console.log(err)
    });
}

export const getToken = () => {
    let dataLogin;
    if (localStorage.getItem("dataAuth") !== null) {
        dataLogin = localStorage.getItem("dataAuth");
        postData(JSON.parse(dataLogin));
    }else{
        window.location.href = '/login'
    }
}