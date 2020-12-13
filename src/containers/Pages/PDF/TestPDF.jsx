import React, { Fragment, useState } from 'react'
import jsPDF from 'jspdf'
// import telkomselIcon from './../../../assets/img/logo-telkomsel.png'
// import kartuHalo from './../../../assets/img/BerlanggananHalo.png'
import ReactToPDF from './ReactToPDF';
import KTPDoc from './KTPDoc';


export function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");


    // <img id="im" src={telkomselIcon} alt="" style={{display: "none"}} />
    // var result = getBase64Image(document.getElementById("im"));
}
  
export const toDataURL = (url) => fetch(url)
    .then(response => response.blob())
    .then(blob => new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(blob)
    }))


function TestPDF(){
    const [option, setOption] = useState(0)

    const createPDF = async () => {
        var doc = new jsPDF({orientation: 'p', format: 'a4', unit: "pt"})
        doc.setProperties({
            title: "Docman"
        });

        // toDataURL(telkomselIcon).then((dataUrl) => {
        //     console.log(dataUrl)
        // })
        // const imgTelkomsel = await toDataURL(telkomselIcon) 
        // const imgKartu = await toDataURL(kartuHalo) 

        // var imgData = 'data:image/png;base64,'+ imgBase64;
        // doc.addImage(imgTelkomsel, 'PNG', 50, 10, 100, 120);
        // doc.addImage(imgKartu, 'PNG', 20, 150, 100, 50)

        doc.setFont('Helvetica-Bold', 'bold')
        doc.setFontSize(18)
        doc.text('Berlangganan kartuHalo', 200, 85)

        doc.setDrawColor("#eee")
        doc.setLineWidth(0.3)
        doc.line(60, 110, 535.28, 110)
        doc.line(60, 150, 535.28, 150)
        doc.line(60, 185, 535.28, 185)
        doc.line(60, 220, 535.28, 220)
        doc.line(60, 255, 535.28, 255)
        doc.line(60, 290, 535.28, 290)
        doc.line(60, 325, 535.28, 325)
        doc.line(60, 360, 535.28, 360)
        doc.line(60, 395, 535.28, 395)
        doc.line(60, 430, 535.28, 430)
        doc.line(60, 465, 535.28, 465)

        const data = {
            'Tanggal Pembelian': new Date().toString(),
            'Transaksi ID': 'X003201120125142441529590',
            'Metode Pembayaran': 'Kartu Debit',
            'N I K': '3205041203930001',
            'Nama': 'Tifa Lockhart',
            'Nomor kartuHalo': '081144441212',
            'Harga Paket': 'Rp550.000 per bulan (Halo Kick Platinum)',
            'Informasi Paket': '100GB Data + 100 GB Entertainment + Kuota Telepon dan SMS',
            'Periode Penagihan': 'Tanggal 1 di Bulan Berikutnya',
            'Batas Pemakaian': 'Rp1.100.000 (2x Harga Paket)'
        }

        var keys = []
        var values = []
        for (const key in data) {
            keys.push(key)
            values.push(data[key])
        }

        doc.setFont('Helvetica-Bold', 'normal')
        doc.setFontSize(12.2)

        doc.text(keys, 60, 143, {align: "left", lineHeightFactor: 2.87})
        doc.text(values, 535.28, 143, {align: "right", lineHeightFactor: 2.87})

        // doc.save()

        const encodeBase64PDF = doc.output('datauristring', {filename: 'docman.pdf'});        //returns the data uri string
        console.log(encodeBase64PDF)
        // doc.output('datauri');              //opens the data uri in current window
        // doc.output('save', 'filename.pdf'); //Try to save PDF as a file (not works on ie before 10, and some mobile devices)
        doc.output('dataurlnewwindow');     //opens the data uri in new window

        // var string = doc.output('datauristring');
        // var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
        // var x = window.open();
        // x.document.open();
        // x.document.write(iframe);
        // x.document.close();

        // window.open(doc.output('bloburl'), '_blank');
        
        // window.open(doc.output('bloburl'))
        
        // window.open(doc.output('bloburl'), "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
        // window.open(url,"_blank","top=100,left=200,width=1000,height=500");
    }

    // require("./test.scoped.css")
    return (
        <Fragment>
            <p>Document</p>
            <button onClick={createPDF}>Generate PDF</button>
            <button onClick={() => setOption(2)}>Show Docman</button>
            <button onClick={() => setOption(3)}>Show KTP</button>
            {option === 2 && <ReactToPDF />}
            {option === 3 && <KTPDoc />}
            <button onClick={() => setOption(0)}>Clear</button>
        </Fragment>
    )
}

export default TestPDF