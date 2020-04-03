import React from "react";
import { Variable, GetSetter, TXID } from "./Variabels";

const genTxID = new TXID() 

export default class Params extends React.Component {
    constructor(props){
        super(props)
        const {state} = this.props.location
        let params = state
        this.state = {
            lang: params.lang,
            slug: params.slug,
            desc1: "",
            desc2: "",
            phoneNumber: "",
            transaksiID: "",
            billAmount: genTxID.generateCorrectBill(params.bill)
        }
        this.variable = new Variable(this.state.lang, this.state.slug).getDescEKTP()
    }

    componentDidMount() {
        console.log(this.props);
        let pN = GetSetter.phoneNumber
        if (pN.charAt(0) === "0"){
            pN = "62" + (pN.substring(1, pN.length))
        }
        this.setState({
            desc1: this.variable.desc1,
            desc2: this.variable.desc2,
            phoneNumber: pN,
        }, () => {
                let txId = genTxID.generateTXID(this.state.phoneNumber)
                this.setState({transaksiID: txId}, () => console.log(this.state.transaksiID.length))
        })
    }

    render(){
        return(
            <div>
                <h2>Params Page</h2>
                <p>Language: {this.state.lang}</p>
                <p>Slugify: {this.state.slug}</p>
                <p>Phone Number: {this.state.phoneNumber}</p>
                <p>Transaksi ID: {this.state.transaksiID}</p>
                <p>Bill Amount: {this.state.billAmount}</p>
                <p>{this.state.desc1}</p>
                <p>{this.state.desc2}</p>
                <button onClick={() => this.props.history.goBack()}>Back</button>
            </div>
        )
    }
}