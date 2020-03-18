export class Variable{
    constructor(lang, slug){
        this.lang = lang
        this.slug = slug
    }

    getDescEKTP = () => {
        let desc1, desc2, titlebuton, title
        if(this.lang === "id"){
            desc1 = 'Letakkan e-KTP Anda pada Alat Pemindai'; desc2 = `Lalu Tekan Tombol "Pindai e-KTP"`; titlebuton='Pindai e-KTP'
        }else{
            desc1 = 'Put your e-KTP on the e-KTP Reader'; desc2 = 'Then press the "Scan e-KTP" button'; titlebuton='Scan e-KTP' 
        }

        return {desc1: desc1, desc2: desc2, titlebuton: titlebuton}
    }
}

export const GetSetter = {
    _phoneNumber: "",

    get phoneNumber(){
        return this._phoneNumber
    },

    set phoneNumber(phoneNumber) {
        this._phoneNumber = phoneNumber
    }
}

export class TXID{

    correctDate = (params) => {
        params < 10? params  = "0" + params : params = params
        return params
    }
    correctMili = (mili) => {
        if (mili < 10) return "00" + mili
        else if ( mili < 100) return "0" + mili
        else return mili
    }

    getTimeStamp = () => {
        var date = new Date()
        var year = date.getFullYear()
        var month = date.getMonth()
        var day = date.getDate()
        var hour = date.getHours()
        var minit = date.getMinutes()
        var second = date.getSeconds()
        var milisecond = date.getMilliseconds()

        year = year.toString()
        month = this.correctDate(month)
        day = this.correctDate(day)
        hour = this.correctDate(hour)
        minit = this.correctDate(minit)
        second = this.correctDate(second)
        milisecond = this.correctMili(milisecond)

        // var datetime = year + "/" + month + "/" + day + " " + hour + ":" + minit + ":" + second + "," + milisecond
        var timestamp = year.substring(year.length - 2, year.length) + month + day + hour + minit + second + milisecond

        return timestamp
    }

    generateTXID = (phoneNumber) => {
        let lastPhoneNumber = phoneNumber.substring(phoneNumber.length - 5, phoneNumber.length)
        let txID = "X003" + this.getTimeStamp() + lastPhoneNumber + "0"
        return txID
    }
}