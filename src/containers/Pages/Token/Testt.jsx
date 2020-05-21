import React from "react";
import axios from "axios";
import { Markup } from 'interweave';
import { GetSetter, ClassAPITopUPCash, TXID} from "./Variabels";

const genTxID = new TXID()

class Testt extends React.Component {
    state = {
        data: [], lang: '', slug: '', phoneNumber: '', billAmount: '',
        jsonBody: {
            person: {
                gender: "Man",
                address: "Padang",
            },
            vehicle: {
                car: "Mazda",
                motorcycle: "Yamaha"
            }            
        }
    }

    componentDidMount() {
        console.log(this.state.jsonBody);
        axios.get(`http://ciherang.goes2nobel.com/node/mygrapari/menu/${2}`).then(res => {
            this.setState({
              data: res.data.data
          })
        }) 
    }

    hanldeChangeJsonBody = () => {
        GetSetter.phoneNumber = this.state.phoneNumber
        console.log(GetSetter.phoneNumber)

        let pN = GetSetter.phoneNumber
        if (pN.charAt(0) === "0"){
            pN = "62" + (pN.substring(1, pN.length))
        }

        let arrTrxMoney = []

        arrTrxMoney.push({"cash_amount": 1000})
        arrTrxMoney.push({"cash_amount": 2000})
        arrTrxMoney.push({"cash_amount": 5000})

        ClassAPITopUPCash.assignment_code = "JGLLMN"
        ClassAPITopUPCash.transaction.transaction_id = genTxID.generateTXID(GetSetter.phoneNumber)
        ClassAPITopUPCash.transaction.service_id = pN
        ClassAPITopUPCash.payment.amount = "8000"
        ClassAPITopUPCash.payment.fee = "0"
        ClassAPITopUPCash.payment.total_amount = "10000"
        ClassAPITopUPCash.payment.payment_method = "cash"
        ClassAPITopUPCash.payment.status = "Paid"
        ClassAPITopUPCash.trx_money = arrTrxMoney
        
        let arrBaru = []
        arrTrxMoney.forEach(element => {
            arrBaru.push({'cash_amount':element.cash_amount, 'assignment_code':'asd'})
        });

        alert(JSON.stringify(ClassAPITopUPCash))
        alert(JSON.stringify(arrBaru))
        console.log(ClassAPITopUPCash)

        axios.post("http://dev.nutech-integrasi.com:7010/transaction/top-up", ClassAPITopUPCash, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          }).then((res) => {
            // alert(JSON.stringify(res))
            console.log(res)
        }).catch((err)=> {
            var jsonError = JSON.parse(JSON.stringify(err))
            console.log(jsonError)
            console.log("URL : " + jsonError.config.url + "\nMethod : " + jsonError.config.method + "\nData : " + jsonError.config.data +
            "\nHeaders Accept : " + jsonError.config.headers.Accept + "\nHeaders Content-Type : " + "\nHeaders authorization : " + jsonError.config.headers.authorization)
        })

        var newJson = {...this.state.jsonBody}
        newJson.person.gender = "Woman"
        newJson.person.address = "Depok"
        newJson.vehicle.car = "Toyota"
        newJson.vehicle.motorcycle = "Suzuki"
        this.setState({jsonBody: newJson}, () => console.log(this.state.jsonBody))
    }

    render(){
        return(
            <div>
                <li>{this.state.data.menu}</li>
                <div><Markup content={this.state.data.desc1} /></div><br></br>
                <label>Language: </label>
                <input type="text" value={this.state.lang} onChange={(evt) => this.setState({lang: evt.target.value})} /><br></br>
                <label>Slugify: </label>
                <input type="text" value={this.state.slug} onChange={(evt) => this.setState({slug: evt.target.value})}/><br></br>
                <label>PhoneNumber: </label>
                <input type="text" value={this.state.phoneNumber} onChange={(evt) => this.setState({phoneNumber: evt.target.value})}/><br></br>
                <label>Bill Amount: </label>
                <input type="text" value={this.state.billAmount} onChange={(evt) => this.setState({billAmount: evt.target.value})}/><br></br>
                <button onClick={this.hanldeChangeJsonBody}>Change Json Body</button><br></br>
                <button onClick={() => this.props.history.push({
                    pathname: '/params',
                    state: { slug: this.state.slug, lang: this.state.lang, bill: this.state.billAmount }
                    })}>
                        Go to Params Page
                </button>
                <button onClick={() => this.props.history.push('/params', {lang: this.state.lang, slug: this.state.slug, bill: this.state.billAmount})}>Go to Params Page</button><br></br>
            </div>
        )
    }
}

export default Testt

/*
this.props.history.push({
  pathname: '/template',
  search: '?query=abc',
  state: { detail: response.data }
})
*/

/* Rating 
constructor(props) {
        super(props);
        this.state = {
            rating: 0
        }
    }

    boxClick = (rate) => {
        this.setState({rating: rate}, () => console.log(this.state.rating));
    }

    render(){
        return(
            <div className="modal-keluar" id="Failed-Bank">
                    <div className="wrapper text-white" id="modal-content-FailedBank">
                        <div className="hero-modal">
                            <div className="shop-header">
                                <h2>Beri Penilaian Layanan MyGraPARI</h2>
                                <h4>Seberapa besar keinginan Anda untuk merekomendasikan layanan MyGraPARI ke teman atau kolega Anda?</h4>
                                <button className="button-feedback w-feedback" style={{backgroundColor: this.state.rating===1? "red": null}} onClick={() => this.boxClick(1)}>1</button>
                                <button className="button-feedback w-feedback" style={{backgroundColor: this.state.rating===2? "red": null}} onClick={() => this.boxClick(2)}>2</button>
                                <button className="button-feedback w-feedback" style={{backgroundColor: this.state.rating===3? "red": null}} onClick={() => this.boxClick(3)}>3</button>
                                <button className="button-feedback w-feedback" style={{backgroundColor: this.state.rating===4? "red": null}} onClick={() => this.boxClick(4)}>4</button>
                                <button className="button-feedback w-feedback" style={{backgroundColor: this.state.rating===5? "red": null}} onClick={() => this.boxClick(5)}>5</button>
                                <button className="button-feedback w-feedback" style={{backgroundColor: this.state.rating===6? "red": null}} onClick={() => this.boxClick(6)}>6</button>
                                <button className="button-feedback w-feedback" style={{backgroundColor: this.state.rating===7? "red": null}} onClick={() => this.boxClick(7)}>7</button>
                                <button className="button-feedback w-feedback" style={{backgroundColor: this.state.rating===8? "red": null}} onClick={() => this.boxClick(8)}>8</button>
                                <button className="button-feedback w-feedback" style={{backgroundColor: this.state.rating===9? "red": null}} onClick={() => this.boxClick(9)}>9</button>
                                <button className="button-feedback w-feedback" style={{backgroundColor: this.state.rating===10? "red": null}} onClick={() => this.boxClick(10)}>10</button>
                            </div> 
                                <button className="button w-fail" onClick={this.props.onClick}>OK</button>
                        </div>
                    </div>
            </div>
        )
    }
*/