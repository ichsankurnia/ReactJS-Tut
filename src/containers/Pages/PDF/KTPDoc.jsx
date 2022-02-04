import React, { Fragment } from 'react'
import jsPDF from 'jspdf'
import ktpFront from '../../../assets/img/ktp-front.png'
import ktpBack from '../../../assets/img/ktp-back.png'
import { toDataURL } from './TestPDF'

const dataKTP = {
    "nik": "1304102408960001",
    "name": "HANAFI AGUSTIAN",
    "ttl": 'BUKITTINGGI, 24-8-1996',
    "gender": "LAKI-LAKI",
    "address": "JORONG NAN II SUKU",
    "rt_rw": "000/000",
    "vilage": "SALIMPAUNG",
    "district": "SALIMPAUANG",
    "religion": "ISLAM",
    "mariage": "BELUM KAWIN",
    "occupation": "PELAJAR/MAHASISWA",
    "nationality": "WNI",
    "expire_date": "24-8-2020",
    "blood_type": "-",
    "city": "KABUPATEN TANAH DATAR",
    "province": "SUMATERA BARAT",
    "photo": "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",
    "signature": "Qk1eBAAAAAAAAD4AAAAoAAAAqAAAACwAAAABAAEAAAAAAAAAAADEDgAAxA4AAAIAAAACAAAAAAAA////////////wP////////////////////8AAAD/////5gf///////////////////8AAAD/////8PB/////9/////////////8AAAD//////D4H////8/////////////8AAAD//////45Af///+f////////////8AAAD//////+M4D////H////////////8AAAD//////HgPAf///n////////////8AAAD//////j8H4B///x////////////8AAAD//////x/ADAP//8////////////8AAAD//////4f4Q4B//8f///////////8AAAD//////8P8CPgP//P///////////8AAAD//////+H/AH8B//n///////////8AAAD///////D/gBDgP/x///////////8AAAD///////h/4AYkB/w///////////8AAAD///////w/8ACBwP8f//////////8AAAD///////4f8IAAfB+P//////////8AAAD///////+HxEPBP4HD//////////8AAAD////////Djg/4CHgB//////////8AAAD////////hPgf8AB8AB/////////8AAAD////////0f4P/MEPgAP////////8AAAD////////wf4H//AAYBAf///////8AAAD/////////H8T//iAAA4A///////8AAAD/////////z+A//74AIGOD//////8AAAD/////////5/Ef//+AAAh///////8AAAD/////////8/iP///uAEAf//////8AAAD/////////+P5n////sBwD//////8AAAD//////////n8x////+AAA//////8AAAD//////////x+Y/////AwAH/////8AAAD//////////4/Of////m/mB/////8AAAD//////////+fnH////yf/4/////8AAAD///////////H3j////4P///////8AAAD///////////zz5////+H///////8AAAD///////////478f////D///////8AAAD///////////+b/H////h///////8AAAD////////////D/x////w///////8AAAD////////////3/5////4///////8AAAD///////////////////+f//////8AAAD////////////////////P//////8AAAD////////////////////n//////8AAAD////////////////////z//////8AAAD////////////////////5//////8AAAD////////////////////8//////8AAAD////////////////////+f/////8AAAD/////////////////////P/////8AAAA=",
}


export const removeIndex0City = (city) => {
    var arr = city.split(" ")
    if(arr.length > 0){
        if(arr[0].toUpperCase() === "KOTA" || arr[0].toUpperCase() === "KABUPATEN" || arr[0].toUpperCase() === "PROVINSI"){
            arr.shift()
        }
    }   
    return arr.join(" ")
}

export const printDocKTP = async () => {
    try {
        var doc = new jsPDF({orientation: 'p', format: 'a4', unit: "pt"})
        doc.setProperties({
            title: "KTP"
        });

        /* Background Image KTP */
        const base64Front = await toDataURL(ktpFront)
        const base64Back = await toDataURL(ktpBack)
        doc.addImage(base64Front, 'PNG', 55, 100, 480, 300)
        doc.addImage(base64Back, 'PNG', 65, 410, 460, 300)

        
        doc.setFont('Helvetica', 'bold')
        doc.setTextColor('#323332')
        
        doc.setFontSize(14)

        /* Header */
        const prov = "PROVINSI " + dataKTP.province 
        const kab = dataKTP.city 
        const xOffsetProv = (doc.internal.pageSize.width / 2) - (doc.getStringUnitWidth(prov) * doc.internal.getFontSize() / 2); 
        const xOffsetKab = (doc.internal.pageSize.width / 2) - (doc.getStringUnitWidth(kab) * doc.internal.getFontSize() / 2);
        doc.text(prov, xOffsetProv, 130)
        doc.text(kab, xOffsetKab, 145)
        
        
        doc.setFontSize(10.5)

        /* Body Left */
        const datas = []
        for (const key in dataKTP) {
            const ky = key.toLowerCase()
            if(ky !== "nik" && ky !== "birth_place" && ky !== "birth_date" && ky !== "blood_type" && ky !== "city" && ky !== "province" && ky !== "country" && ky !== "nokk" && ky !== "photo" && ky !== "signature"){
                datas.push(dataKTP[key])
            }
        }
        doc.text(datas, 193, 204, {align: "left", lineHeightFactor: 1.22})


        /* Body Rigth */
        doc.text(dataKTP.blood_type, 357, 229.5)                    // Golongan Darah

        try {
            doc.addImage(dataKTP.photo, 'PNG', 395.5, 185, 105, 130)    // Photo
        } catch (error) { }

        const city = removeIndex0City(dataKTP.city)    
        const xOffset = (395.5 + 105 / 2 ) - (doc.getStringUnitWidth(city) * doc.internal.getFontSize() / 2)
        doc.text(city, xOffset, 327.5)
        try {
            doc.addImage(dataKTP.signature, 'PNG', 370, 340, 140, 30)
        } catch (error) {}

        /* N I K */
        doc.setFont('Courier', 'bold')
        doc.setFontSize(18.5)
        doc.setTextColor('#323332')
        doc.text(dataKTP.nik, 185, 186)

        const encodeBase64PDF = doc.output('datauristring', {filename: 'ktp.pdf'});        //returns the data uri string
        // console.log(encodeBase64PDF)
        // doc.output('dataurlnewwindow');     //opens the data uri in new window
        window.open(doc.output('bloburl'), "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
        // return [encodeBase64PDF, doc.output('bloburl')]
        return encodeBase64PDF
    } catch (error) {
        console.log(error)
        // return ["", ""]
        return ""
    }
}

function KTPDoc() {
    const [pdfSrc, setPdfSrc] = React.useState(null)

    React.useEffect(() => {
        async function getEKTPBase64(){
            var base64 = await printDocKTP()
            setPdfSrc(base64)
        }

        getEKTPBase64()
    }, [])
    
    return(
        <Fragment>
            <button onClick={printDocKTP}>Print KTP</button>
            {/* <iframe src={printDocKTP()[0]} title='Docman MyG eKTP' /> */}
            {pdfSrc && 
                <object data={pdfSrc} type="application/pdf" width='100%' height='1000px' title='Docman MyG eKTP' />
            }
        </Fragment>
    )
}

export default KTPDoc