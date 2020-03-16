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