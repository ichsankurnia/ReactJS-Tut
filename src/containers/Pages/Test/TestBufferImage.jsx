import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import {Base64} from 'js-base64';
import logoReact from '../../../assets/img/mobile-legends-app-icon.png'


const TestBufferImage = () => {
    const [byteArr, setByteArr] = useState([])
    const [resImg, setResImg] = useState(null)
    const [picBefore, setPicBefore] = useState(null)
    const [picAfter, setPicAfter] = useState(null)
    
    var fiImgBefore = useRef(null)
    var fiImgAfter = useRef(null)
    
    var prevImgBefore = useRef(null)
    var prevImgAfter = useRef(null)


    useEffect(() => {
        axios.get('http://localhost:1212/api/troubleet/:ticket_id', ).then(async res => {
            console.log(res.data.data.data)
            // const arr = toBase64(res.data.data.data)
            var arrayBufferView = new Uint8Array( res.data.data.data );
            var blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL( blob );
            console.log(imageUrl)
            setResImg(imageUrl)

            // setByteArr(res.data.data.pic_before)
            // const ori = res.data.data[0].pic_before.data
            // console.log(ori)
            // const arrayBuffer = new Uint8Array(ori).buffer
            // console.log(arrayBuffer)
            // const int8Arr = new Int8Array(arrayBuffer)
            // console.log(int8Arr)
            // const bytes = new Uint8Array(arrayBuffer)
            // console.log(bytes)
            // const base64 = Buffer.from(bytes).toString('base64')
            // console.log(base64)


            // let binary = Buffer.from(res.data.data[0].pic_before).toString('base64')
            // console.log(binary)

            // const blob = new Blob([bytes.buffer], {type: 'image/jpeg'})
            // const blob = new Blob([binary.buffer], { type: 'application/octet-binary' })
            // console.log(blob)
            // const result = URL.createObjectURL(blob)
            // window.open(result, 'Name','resizable=1')

            // var blob = new Blob([bytes], { type: "image/png" });
            // var urlCreator = window.URL || window.webkitURL;
            // var result = urlCreator.createObjectURL(blob);
            // const result = URL.createObjectURL(new Blob([bytes]));
            // const result = 'data:image/png;base64,' + encode(bytes)

            // const result = toBase64(ori)

            // let base64Logo = await toDataURL(logoReact)
            // console.log(base64Logo.length)
            // let uint8Logo = ""
            // if(base64Logo.split(',').length > 1){
            //     uint8Logo = Base64.toUint8Array(base64Logo.split(',')[1])
            // }else{
            //     uint8Logo = Base64.toUint8Array(base64Logo)
            // }
            // const int8Logo = new Int8Array(uint8Logo)
            // console.log(uint8Logo)
            // const blob = new Blob([bytes], { type: 'image/png' })
            // console.log(blob)
            // const result = URL.createObjectURL(blob)

            // setResImg(result)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    function toBase64(arr) {
        arr = new Uint8Array(arr)
        return btoa(
           arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
    }

    const toDataURL = (url) => fetch(url)
    .then(response => response.blob())
    .then(blob => new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(blob)
    }))

    const handleChange = (e, id) => {
        if ( !( window.File && window.FileReader && window.FileList && window.Blob ) ) {
            alert('The File APIs are not fully supported in this browser.');
            return false;
        }
        if(id === "img-before"){
            readfiles(fiImgBefore.current.files, id);
        }else{
            readfiles(fiImgAfter.current.files, id);
        }
    }

    function readfiles(files, id) {
        var existImgPreview = document.getElementsByClassName('test-preview-'+id)
        var existImagePreview = document.getElementsByName('original-' + id)                                              // ORIGINAL IMAGE PREVIEW
        var existingcanvases = document.getElementsByClassName('canvas-'+id);
        while (existImgPreview.length > 0) {
            if(id === "img-before"){
                prevImgBefore.current.removeChild(existingcanvases[0])
                prevImgBefore.current.removeChild(existImagePreview[0])
                prevImgBefore.current.removeChild(existImgPreview[0])
            }else{
                prevImgAfter.current.removeChild(existingcanvases[0])
                prevImgAfter.current.removeChild(existImagePreview[0])
                prevImgAfter.current.removeChild(existImgPreview[0])
            }
        }

        for (var i = 0; i < files.length; i++) {
            processfile(files[i], id); // process each file at once
        }

        if(id === "img-before"){
            fiImgBefore.current.value = ""
        }else{
            fiImgAfter.current.value = ""
        }
        // TODO remove the previous hidden inputs if user selects other files
    }

    function processfile(file, id) {
  
        if( !( /image/i ).test( file.type ) ){
            alert( "File "+ file.name +" is not an image." );
            return false;
        }
    
        // read the files
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        
        reader.onload = function (event) {
            // blob stuff
            var blob = new Blob([event.target.result]); // create blob...
            window.URL = window.URL || window.webkitURL;
            var blobURL = window.URL.createObjectURL(blob); // and get it's URL
            
            // helper Image object
            var image = new Image();
            image.name = "original-" + id;
            image.src = blobURL;
            //   setResImg(blobURL)
            /** PREVIEW ORIGINAL IMAGE **/
            if(id==="img-before"){
                prevImgBefore.current.appendChild(image)
            }else{
                prevImgAfter.current.appendChild(image)
            }
            image.onload = function() {
                // have to wait till it's loaded
                resizeMe(image, image.width, image.height, id); // send it to canvas
            }
        };
    }

    
    // === RESIZE ====
    function resizeMe(img, w, h, id) {
        var canvas = document.createElement('canvas');
        canvas.className = "canvas-" + id
        
        // resize the canvas and draw the image data into it
        var width; var height;
        if(w > h){
            if(w < 800){
                width = w/1.5;
                height = h/1.5;
            }else if(w < 1370){
                width = w/2;
                height = h/2;
            }else if(w < 4000){
                width = w/3
                height = h/3
            }else{
                width = w/6
                height = h/6
            }
        }else{
            if(h < 800){
                width = w/1.5;
                height = h/1.5;
            }else if(h < 1370){
                width = w/2;
                height = h/2;
            }else if(h < 4000){
                width = w/3
                height = h/3
            }else{
                width = w/6
                height = h/6
            }
        }

        // width = w; height = h
        
        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        
        const base64Img = canvas.toDataURL('image/jpeg', 0.75)
        // const base64Img = canvas.toDataURL('image/jpeg', 1)

        console.log(base64Img)
        
        /* CREATE PREVIEW IMG */
        var image = document.createElement('img');
        image.className = "test-preview-" + id
        image.src = base64Img
        if(w > h){
            image.width = 200
            image.height = 150
        }else if(w === h){
            image.width = 200
            image.height = 200
        }else{
            image.width = 150
            image.height = 200
        }

        if(id === "img-before"){
            prevImgBefore.current.appendChild(canvas)
            prevImgBefore.current.appendChild(image)
            setPicBefore(base64Img)
        }else{
            prevImgAfter.current.appendChild(canvas)
            prevImgAfter.current.appendChild(image)
            setPicAfter(base64Img)
        }

        
        // console.log(canvas.toDataURL('image/jpeg', 0.75))
        return canvas.toDataURL("image/jpeg",0.7); // get the data from canvas as 70% JPG (can be also PNG, etc.)
    }

    const submitDataToAPI = async () => {
        try {
            const payload = {
                no_ticket : "20210701MyG0000000099",
                tanggal_masalah: "2021-07-01",
                jam_masalah: "16:22:01",
                tanggal_done: "2021-07-02", 
                jam_done: "16:23:03", 
                ip: 787878, 
                problem: "Error", 
                no_penyebab: 2, 
                solusi: "Restart Perangkat", 
                no_perangkat: 2, 
                status: "Open", 
                no_user: 0, 
                no_projek: 2, 
                jenislaporan: "PERMASALAHAN", 
                no_pvm: 0, 
                sumber: "Teknisi", 
                refnotrouble: "Log VM", 
                teknisi: "SPV", 
                totaldowntime: "Ini total Downtime", 
                arah_gate: null, 
                pic_before: picBefore, 
                pic_after: picAfter
            }
            // console.log(payload.pic_before)
            const res = await axios.post('http://localhost:1212/trouble-et', payload)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h1>Buffer Image</h1>
            {resImg &&
            <img src={resImg} alt="saas" />
            }
            <form style={{display: 'flex'}}>
                <div id="preview-img-before" ref={prevImgBefore}>
                    <label>Pic Before : </label>
                    <input type="file" id="fileinput-img-before" onChange={(e) => handleChange(e, "img-before")} multiple ref={fiImgBefore} />
                </div>
                <div id="preview-img-after" ref={prevImgAfter}>
                    <label>Pic After : </label>
                    <input type="file" id="fileinput-img-after" onChange={(e) => handleChange(e, "img-after")} multiple ref={fiImgAfter} />
                </div>
            </form>
            
            <button onClick={submitDataToAPI}>Submit Data</button>
        </>
    )
}

export default TestBufferImage