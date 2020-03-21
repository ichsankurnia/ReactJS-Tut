//#region Deskripsi Upgrade dan Ganti Kartu
export class Variable{
    constructor(lang, slug){
        this.lang = lang
        this.slug = slug
    }

    getDescEKTP = () => {
        let desc1, desc2, titlebuton, fail1, fail2
        if(this.lang === "id"){
            desc1 = 'Letakkan e-KTP Anda pada Alat Pemindai'; desc2 = `Lalu Tekan "Pindai"`; titlebuton='Pindai'
            fail1 = "Silakan pindai kembali <b>e-KTP</b> Anda, pastikan alat pemindai dalam keadaan bersih."
            fail2 = "Maaf, <b>e-KTP</b> Anda tidak terbaca pada sistem MyGraPARI. Silakan hubungi <b>Customer Service</b> GraPARI untuk bantuan."
        }else{
            desc1 = 'Put your e-KTP on the e-KTP Reader'; desc2 = 'Then press "Scan"'; titlebuton='Scan'
            fail1 = "Please scan your <b>e-KTP</b> again, make sure the scanner is clean."
            fail2 = "Sorry, your <b>e-KTP</b> cannot be read on the MyGraPARI system. Please contact GraPARI <b>Customer Service</b> for assistance."
        }

        return {desc1: desc1, desc2: desc2, titlebuton: titlebuton, fail1: fail1, fail2: fail2}
    }

    getDescScanFinger = (titleParams) => {
        let desc, fail1, fail2, loaderDesc
        if(this.lang === "id"){
            desc = "Letakkan <b>Telunjuk Kanan/Kiri</b> Anda pada Alat Pemindai Sidik Jari"
            fail1 = "Silakan pindai kembali <b>Telunjuk Kanan/Kiri</b> Anda, pastikan alat pemindai dalam keadaan bersih."
            fail2 = "Maaf, <b>Sidik Jari</b> Anda tidak terbaca pada sistem MyGraPARI. Silakan hubungi <b>Customer Service</b> GraPARI untuk bantuan."
            loaderDesc = "Proses " + titleParams + " sedang berjalan, mohon tunggu beberapa saat"
        }else{
            desc = "Place your <b>Right/Left Index Finger</b> on the fingerprint scanner"
            fail1 = "Please scan your <b>Right/Left Index Finger</b> again, make sure the scanner is clean."
            fail2 = "Sorry, your <b>Finger Print</b> cannot be read on the MyGraPARI system. Please contact GraPARI <b>Customer Service</b> for assistance."
            loaderDesc = "Process of " + titleParams + " is ongoing, please wait a few moments"
        }
        return {desc: desc, fail1: fail1, fail2: fail2, loaderDesc: loaderDesc}
    }

    getDescSukses = (titleParams) => {
        let desc1, desc2, desc3
        if(this.lang === "id") {
            desc1 = "Proses " + titleParams
            desc2  = "Berhasil";
            if(this.slug === "card-upgrade"){
                desc3 = "Silakan Ambil Kartu SIM Anda dan Pastikan Melakukan Pengaturan Jaringan 4G pada Perangkat"
            }else{
                desc3 = "Silakan Ambil Kartu SIM Anda dan Pastikan Melakukan Pengaturan Jaringan pada Perangkat"
            }
        }else{
            desc1 = "Process of " + titleParams; 
            desc2 = "Success"
            if(this.slug === "card-upgrade"){
                desc3 = "Please Take Your SIM Card and Make Sure to Make 4G Network Settings on Your Device"
            }else{
                desc3 = "Please Take Your SIM Card and Make Sure to Make Network Settings on Your Device"
            }
        }

        return {desc1: desc1, desc2: desc2, desc3: desc3}
    }

    getDescGagal = (titleParams) => {
        let desc1, desc2, desc3
        if(this.lang === "id") {
            desc1 = "Proses " + titleParams;
            desc2 = "Tidak Berhasil";
            desc3 = "Silakan Hubungi Customer Service GraPARI untuk Bantuan"
        }else{
            desc1 = "Process of " + titleParams;
            desc2 = "Failed"
            desc3 = "Please contact GraPARI Customer Service for assistance"
        }

        return {desc1: desc1, desc2: desc2, desc3: desc3}
    }

    getDescFeedBack = () => {
        let title, desc1, desc2
        if(this.lang === "id"){
            title = "Beri Penilaian Layanan MyGraPARI"
            desc1 = "Seberapa besar keinginan Anda untuk merekomendasikan layanan MyGraPARI ke teman atau kolega Anda?"
            desc2 = "Hal apa yang Anda rasa perlu ditingkatkan pada mesin layanan MyGraPARI?"
        }else{
            title = "Rate MyGraPARI Service"
            desc1 = "How much do you want to recommend the MyGraPARI service to your friends or colleagues?"
            desc2 = "What do you think needs to be improved on the MyGraPARI service engine?"
        }

        return {title: title, desc1: desc1, desc2: desc2}
    }
}
//#endregion

//#region Deskripsi Modal ALL Menu
export class DescModal{
    getDescConfirm = (lang, title) => {
        let desc1, desc2, titleBtn1, titleBtn2
        if(lang === "id"){
            desc1="Anda akan melakukan"; desc2 = "untuk nomor :"; titleBtn1 = "Lanjut"; titleBtn2 = "Batal"
        }else{
            desc1="You will"; desc2 = "for number :";
            titleBtn1 = "Continue"; titleBtn2 = "Cancel"
        }
        return {desc1: desc1, desc2: desc2, titleBtn1: titleBtn1, titleBtn2: titleBtn2}
    }

    getDescFailNumber = (lang) => {
        let title
        if(lang === "id") title = "<b>Nomor tidak dikenali</b>, harap masukkan nomor Telkomsel yang benar dan aktif."
        else title = "<b>Unrecognized number</b>, please enter the correct and active Telkomsel number."
        return title
    }

    getDescFailBank = (lang) => {
        let title
        if(lang === "id") title = "Maaf, nomor Anda terdeteksi terdaftar pada layanan perbankan. Harap menghubungi <b>Customer Service</b> GraPARI untuk bantuan lebih lanjut."
        else title = "Sorry, your number was detected as being registered with banking services. Please contact GraPARI <b>Customer Service</b> for further assistance."
        return title
    }
}
//#endregion

//#region Beli Pulsa Prabayar dan Bayar Tagihan Kartu Halo
export class DescPulsaAndTagihanHalo{
    constructor(lang, slug){
        this._lang = lang
        this._slug = slug
    }

    getDescPilihPulsa = () => {
        let desc
        if (this._lang === "id") desc = "Pilih Nominal Pulsa yang Anda Inginkan"
        else desc = "Choose the Credit Nominal you want"
        return desc
    }

    getDescHalo = (phoneNumber, IDR) => {
        let desc1, desc2, titleBtn
        if(this._lang === "id"){
            desc1 = "Pada nomor " + phoneNumber + " terbaca memiliki tagihan sebesar Rp " + IDR
            desc2 = "Tekan <b>LANJUT</b> untuk melanjutkan"; titleBtn = "Lanjut"
        }else{
            desc1 = "On number "+phoneNumber+" it reads a bill of IDR " + IDR
            desc2 = "Press <b>CONTINUE</b> to continue"; titleBtn = "Continue"
        }
        return {desc1: desc1, desc2: desc2, titleBtn: titleBtn}
    }

    getDescPaymentMethod = () => {
        let desc
        if (this._lang === "id") desc = "Pilih Metode Pembayaran"
        else desc = "Choose Payment Method"
        return desc
    }

    getDescKonfirmBayar = (title) => {
        let desc1, desc2, desc3, desc4, desc5, desc6
        if(this._lang === "id"){
            desc1 = "Konfirmasi " + title;
            desc4 = "Nomor"; desc5 = "Nominal"; desc6= "Metode Bayar"
            if(this._slug === "pulsa-payment"){
                desc2 = "BAYAR DENGAN UANG PAS, MESIN INI TIDAK MENGELUARKAN KEMBALIAN"; desc3 = "";
            }else{
                desc2 = "MESIN INI TIDAK MENGELUARKAN KEMBALIAN"; desc3="KELEBIHAN PEMBAYARAN SECARA OTOMATIS AKAN MASUK SEBAGAI DEPOSIT KARTUHALO"
            }
        }else{
            desc1 = "Confirm " + title;
            desc4 = "Number"; desc5 = "Nominal"; desc6= "Payment Method"
            if(this._slug === "pulsa-payment"){
                desc2 = "PAY WITH EXACT MONEY, THIS MACHINE DOES NOT SPEND A RETURN"; desc3 = "";
            }else{
                desc2 = "THIS MACHINE DOES NOT SPEND A RETURN"; desc3="THE EXCESS OF PAYMENT AUTOMATICALLY WILL ENTER AS A KARTUHALO DEPOSIT"
            }
        }

        return {desc1: desc1, desc2: desc2, desc3: desc3, desc4: desc4, desc5: desc5, desc6: desc6}
    }

    getDescBayarTunai = () => {
        let desc1, desc2, desc3, desc4, desc5, desc6
        if (this._lang === "id"){
            desc1 = "Silakan Masukkan Uang pada Alat Penerima Uang Tunai"; desc2 = "Pastikan Pembayaran Menggunakan Uang Kertas Minimal Pecahan Rp 10.000"
            desc5 = "Jumlah yang harus dibayar"; desc6 = "Uang yang telah anda masukan"
            if(this._slug === "pulsa-payment"){
                desc3 = "BAYAR DENGAN UANG PAS, MESIN INI TIDAK MENGELUARKAN KEMBALIAN"; desc4 = ""
            }else{
                desc3 = "MESIN INI TIDAK MENGELUARKAN KEMBALIAN"; desc4 = "KELEBIHAN PEMBAYARAN SECARA OTOMATIS AKAN MASUK SEBAGAI DEPOSIT KARTUHALO"
            }
        }else{
            desc1 = "Please Enter Money in the Cash Receiver"; desc2 = "Ensure Payment Using Banknotes with a Minimum Fraction of IDR 10,000"
            desc5 = "Amount to be paid"; desc6 = "Money that you have entered"
            if(this._slug === "pulsa-payment"){
                desc3 = "PAY WITH EXACT MONEY, THIS MACHINE DOES NOT SPEND A RETURN"; desc4 = ""
            }else{
                desc3 = "THIS MACHINE DOES NOT SPEND A RETURN"; desc4 = "THE EXCESS OF PAYMENT AUTOMATICALLY WILL ENTER AS A KARTUHALO DEPOSIT"
            }
        }

        return {desc1: desc1, desc2: desc2, desc3: desc3, desc4: desc4, desc5:desc5, desc6: desc6}
    }

    getDescBelumSelesai = (title) => {
        let desc, titleBtn1, titleBtn2
        if (this._lang === "id"){
            desc = "Anda belum menyelesaikan proses pembayaran " + title + ". Jika Anda keluar dari menu ini, seluruh uang yang Anda masukkan dapat diambil di Kasir GraPARI dengan menunjukkan struk dari MyGraPARI."
            titleBtn1 = "Lanjut"; titleBtn2 = "Batal"
        }else{
            desc = "You have not completed " + title + " payment process. If you exit this menu, all the money you have entered can be collected at the GraPARI Cashier by showing the receipt from MyGraPARI."
            titleBtn1 = "Continue"; titleBtn2 = "Cancel"
        }

        return {desc: desc, titleBtn1: titleBtn1, titleBtn2: titleBtn2}
    }

    getDescKelebihanBayar = (title, IDR) => {
        let desc1, desc2, desc3, titleBtn1, titleBtn2
        if(this._lang === "id"){
            desc1 = "Terdapat <b>KELEBIHAN BAYAR</b> sebesar Rp " + IDR + "."
            desc2 = "Mesin ini <b>TIDAK MENGELUARKAN KEMBALIAN.</b>"
            titleBtn1 = "Lanjut"; titleBtn2 = "Batal"
            if(this._slug === "pulsa-payment"){
                desc3 = "Untuk pengembalian terhadap kelebihan bayar, silakan hubungi Kasir GraPARI dengan membawa struk transasksi."
            }else{
                desc3 = "Seluruh kembalian akan secara otomatis masuk sebagai deposit ke kartuHalo Anda dan bisa digunakan untuk pembayaran tagihan bulan berikutnya."
            }
        }else{
            desc1 = "There are <b>EXCESS PAYS</b> amounting to IDR "+ IDR + "."
            desc2 = "This machine <b>DOES NOT SPEND A RETURN</b>"
            titleBtn1 = "Continue"; titleBtn2 = "Cancel"
            if(this._slug === "pulsa-payment"){
                desc3 = "For returns to overpayments, please contact GraPARI Cashier with a transaction receipt."
            }else{
                desc3 = "All changes will automatically be entered as a deposit to your kartuHalo and can be used for bill payments for the following month."
            }
        }
        return {desc1: desc1, desc2: desc2, desc3: desc3, titleBtn1: titleBtn1, titleBtn2: titleBtn2}
    }

    getDescSuksesBayar  = (title, IDR, sisaPulsa) => {
        let desc1, desc2, desc3, desc4
        if (this._lang === "id"){
            desc1 = "Proses pembayaran " + title; desc2 = "Berhasil"
            desc3 = "Terima kasih telah melakukan pengisian ulang pulsa senilai Rp " + IDR
            desc4 = "Sisa pulsa Anda kini menjadi Rp " +  sisaPulsa
        }else{
            desc1 = "Payment process of " + title; desc2 = "Success"
            desc3 = "Thank you for topping up for IDR " + IDR; desc4 = "Your remaining credit is now at IDR " + sisaPulsa
        }
        return {desc1: desc1, desc2: desc2, desc3: desc3, desc4: desc4}
    }

    getDescGagalBayar = (title) => {
        let desc1, desc2, desc3
        if(this._lang === "id"){
            desc1 = "Proses pembayaran " + title; desc2 = "Tidak Berhasil"; desc3 = "Silakan hubungi kasir GraPARI untuk bantuan"
        }else{
            desc1 = "Payment process of " + title; desc2 = "Failed"; desc3 = "Please contact the GraPARI cashier for assistance"
        }
        return {desc1: desc1, desc2: desc2, desc3: desc3}
    }
}
//#endregion


//#region Generate TransaksiID
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

    generateCorrectBill = (bill) => {
        let correctBill
        console.log(bill.length)
        if(bill.length < 4){
            correctBill = bill
        }else if(bill.length > 3 && bill.length < 7){
            correctBill = bill.substring(0, bill.length - 3) + "." + bill.substring(bill.length - 3, bill.length)
        }else if(bill.length > 6 && bill.length < 10){
            correctBill = bill.substring(0, bill.length - 6) + "." + bill.substring(bill.length - 6, bill.length - 3) + "." + bill.substring(bill.length - 3, bill.length)
        }
        return correctBill
    }
}
//#endregion

export let ClassAPITopUPCash = {
	"assignment_code": "",
	"transaction": {
		"transaction_id": "",
		"service_id": "",
		"serial_number": ""
	},
	"payment": {
		"amount": 0,
		"payment_method": "cash"
	},
	"trx_money": [ ]
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