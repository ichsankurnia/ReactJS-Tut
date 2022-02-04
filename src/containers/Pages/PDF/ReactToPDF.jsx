import React, { Fragment  } from 'react'
import { withRouter } from 'react-router'
import jsPDF from 'jspdf'
import logoTsel from '../../../assets/img/logo-telkomsel-form.png'
import { printDocKTP, removeIndex0City } from './KTPDoc';


export function openBase64InNewWindow (base64ImageData) {
    const contentType = 'image/jpeg';

    const byteCharacters = atob(base64ImageData.substr(`data:${contentType};base64,`.length));
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
        const slice = byteCharacters.slice(offset, offset + 1024);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, {type: contentType});
    const blobUrl = URL.createObjectURL(blob);
    
    return blobUrl
}

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
    "birth_place" : "",
    "birth_date" : "",
    "city": "KABUPATEN TANAH DATAR",
    "province": "SUMATERA BARAT",
    "country": "",
    "photo": "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",
    "signature": "",
    "nokk": "1304102506090005"
}

const psbVar = {
    email: "hanafi.nutech@gmail.com",
    pattern : "",
    nomor_halo: "08112233445",
    title_paket : "",
    harga_paket: 0,
    upfront_payment: 0,
    info_paket: "",
    perso_process: false
}

let customerAcountVar = {
    customer_account_id: "",
    type: "",
    subtype: "",
    region: "",
    salutation: "",
    primary_home_number: "",
    postal_code: "",
}


const getDateMonth = () => {
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const d = new Date();
    var date = d.getDate()
    date < 10? date = `0${date}` : date = date                                                              // eslint-disable-line
    const month = monthNames[d.getMonth()]

    return [date, month]
}

export function _base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}


class ReactToPDF extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            showFormulir: true,
            showPDF: false,
            showFormulirPDF: false,
            showKtpPDF: false,
            ktp: "",
            docman: "",
            combinepdf: "",
        }
    }

    componentDidMount(){
        require("./docman.css")

        this.getKtpDoc()
    }

    componentWillUnmount(){
        window.location.href = `${window.location.pathname}`
    }

    // useEffect(() => {
    //     require("./docman.css")

    //     return () => {
    //         window.location.href = './jspdf'
    //     }
    // }, [])

    getKtpDoc = async () => {
        const base64Ktp = await printDocKTP()
        if(base64Ktp !== ""){
            // const subBase64KTP = base64Ktp.substring(base64Ktp.indexOf(',') + 1, base64Ktp.length)
            this.setState({ktp: base64Ktp})
        }

        setTimeout(() => {
            this.printDocman()
        }, 1000);
    }

    printDocman = () => {
        var base64Doc = ""
        const input = document.getElementById('docmanToPrint');
        var doc = new jsPDF('p', 'pt', [1300, 1450])
        doc.setProperties({
            title: "Docman"
        });
        
        doc.html(input, {
            filename: 'Docman', x: -250, y: 0,
            callback: function (doc) {
                const encodeBase64PDF = doc.output('datauristring', {filename: 'docman.pdf'});        //returns the data uri string
                // doc.output('dataurlnewwindow');     //opens the data uri in new window
                // window.open(doc.output('bloburl'), "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
                base64Doc = encodeBase64PDF
            },
        })

        if(base64Doc === ""){
            setTimeout(() => {
                this.setState({docman: base64Doc, showFormulirPDF: true, showFormulir: false})
            }, 1000);
        }else{
            this.printDocman()
        }

        // html2canvas(input).then((canvas) => {
        //     const imgData = canvas.toDataURL('image/jpeg', 1);
        //     console.log(imgData)
        //     doc.addImage(imgData, 'PNG', 0, 0);
            
        //     window.open(openBase64InNewWindow(imgData), "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
        // })
    }

    render(){
        return (
            <Fragment>
                {this.state.showFormulirPDF &&
                    <button onClick={() => this.setState({showKtpPDF: true, showFormulirPDF: false})}>Lihat Data KTP</button>
                }
                {this.state.showKtpPDF &&
                    <button onClick={() => this.setState({showFormulirPDF: true, showKtpPDF: false})}>Lihat Formulir</button>
                }
                {this.state.showFormulir && (
                    <div id="docmanToPrint" style={{backgroundColor: '#dae0db'}}>
                        <div className="container">
                            <h1> </h1>
                            <div className="row" style={{backgroundColor: 'white'}}>
                                <div className="col-sm-9 kotak text-center" style={{fontSize: '40px', paddingTop: '10px'}}>
                                    Formulir Pendaftaran & Pasang Baru
                                </div>
                                <div className="col-sm-3" style={{backgroundColor: "white"}}>
                                    <img src={logoTsel} alt="Telkomsel" width="228" height="90" />
                                </div>
                            </div>
        
                            <form action="">
                                <div className="col-md-12 mt-15">
                                {/* <!-- Form Kiri --> */}
                                    <div className="col-md-6">
                                        <div className="form-group" style={{fontSize: 'medium'}}>
                                            Kode Jalur Distribusi<br/>
                                            <input type="text" className="input-teks-transparent wta-80" /><br/>
                                        </div>
        
                                        <div className="form-group col-md-12 custom-bg-form">
                                            <label htmlFor="permohonan">Permohonan :</label><br/>
                                            <input type="checkbox" className="form-check-label" defaultChecked={true} /> Registrasi Postpaid&nbsp;
                                            <input type="checkbox" className="form-check-label" /> Registrasi Prepaid&nbsp;
                                            <input type="checkbox" className="form-check-label" /> Penambahan Nomor<br/>
                                            <input type="checkbox" className="form-check-label" /> Prepaid to Postpaid&nbsp;
                                            <input type="checkbox" className="form-check-label" /> Registrasi Postpaid
                                        </div>
        
                                        <div className="form-group col-md-12 custom-bg-form">
                                            <label htmlFor="tipe_pelanggan">Tipe Pelanggan :</label><br/>
                                            1. Corporate
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
                                            <input type="checkbox" className="form-check-label" /> Strategic&nbsp;
                                            <input type="checkbox" className="form-check-label" /> Enterprise&nbsp;<br/>
                                            <input type="checkbox" className="form-check-label" /> SME No. PKS/WO/SPK/MOU/BAK :
                                                <input type="text" className="wta-25" /> <br/>
                                            2. Consumer
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
                                            <input type="checkbox" className="form-check-label" defaultChecked={true} /> Reguler
                                            <br/>
                                            3. Telkomsel
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
                                            <input type="checkbox" className="form-check-label" /> Employee&nbsp;
                                            <input type="checkbox" className="form-check-label" /> Test
                                        </div>
        
                                        <div className="form-group col-md-12 custom-bg-form">
                                            <label htmlFor="data_pelanggan">Data Pelanggan :</label> <br/>
                                            Nomor kartuHalo (Baru/Tambahan) : <br/>
                                            <input type="text" className="wta-50" defaultValue={psbVar.nomor_halo}/><br/>
                                            Nomor kartuHalo Primary (Jika ada) : <br/>
                                            <input type="text" className="wta-50" /><br/>
                                            Nomor Prepaid : <br/>
                                            <input type="text" className="wta-50" /><br/>
                                            <br/>
                                            1. Nama Corporate: <input type="text" /> <br/>
                                            2. Nama Pelanggan/<br/>
                                            &nbsp;&nbsp;&nbsp;
                                            PIC Corporate: <input type="text" defaultValue={dataKTP.name} /> <br/>
                                            3. No Induk Kependudukan: <input type="text" defaultValue={dataKTP.nik} /> <br/>
                                            4. No. Kartu Keluarga/<br/>
                                            &nbsp;&nbsp;&nbsp;
                                            Nama Ibu Kandung: <input type="text" defaultValue={dataKTP.nokk} /> <br/>
                                            5. Kartu Identitas (Untuk WNA): <input type="checkbox" /> Paspor/KITAP/KITAS <br/>
                                            6. No. Paspor/KITAP/KITAS: <input type="text" /> <br/>
                                            7. Masa Berlaku Paspor/KITAP/KITAS: <br/>
                                            &nbsp;&nbsp;&nbsp;
                                            Tgl/Bulan/Tahun <input type="text" /> <br/>
                                            8. Kewarganegaraan: <input type="text" defaultValue={dataKTP.nationality} /> <br/>
                                            9. Alamat(Jika berbeda dengan data dukcapil): <br/>
                                            &nbsp;&nbsp;&nbsp;
                                            <input type="checkbox" className="form-check-label" /> Kantor
                                            &nbsp;
                                            <input type="checkbox" className="form-check-label" defaultChecked={true} /> Rumah <br/>
                                            &nbsp;&nbsp;&nbsp;
                                            <input type="text" className="wta-96" defaultValue={`${dataKTP.address}, Kelurahan ${dataKTP.vilage},`} /> <br/>
                                            &nbsp;&nbsp;&nbsp;
                                            <input type="text" className="wta-96" defaultValue={`Kecamatan ${dataKTP.district}`} /> <br/>
                                            &nbsp;&nbsp;&nbsp;
                                            Kode Pos
                                            <input type="text" className="wta-25" defaultValue={customerAcountVar.postal_code} />
                                            Kota
                                            <input type="text" className="wta-40" defaultValue={removeIndex0City(dataKTP.city)} /> <br/>
                                            &nbsp;&nbsp;&nbsp;
                                            Provinsi
                                            <input type="text" className="wta-80" defaultValue={dataKTP.province} /><br/>
                                            10. Alamat Email e-Bill : <input type="text" className="wta-60" defaultValue={psbVar.email} /> <br/>
                                            11. No. Telepon(Kantor/Rumah)<input type="text" className="wta-25" /> Ext<input type="text" />
                                            <br/>
                                            12. Hobi : <input type="checkbox" /> Travel
                                            &nbsp;
                                            <input type="checkbox" /> Music
                                            &nbsp;
                                            <input type="checkbox" /> Shopping <br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                                            <input type="checkbox" /> Music
                                            &nbsp;
                                            <input type="checkbox" /> Lainnya <input type="text" /> <br/>
                                            13. Pekerjaan: <input type="text" defaultValue={dataKTP.occupation} /> <br/>
                                            14. Penghasilan: <input type="checkbox" /> Rp. 1.000.000,-s/d Rp.5.000.000,- ,<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <input type="checkbox" /> Rp. 5.000.000,-s/d Rp.10.000.000,- <br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <input type="checkbox" /> {'> Rp. 10.000.000,-'}
                                            <br/>
                                            <div className="mt-15 i-text">
                                                - isi nomor 1-4, 9-12 untuk Pasang Baru kartuHalo dan Registrasi Prepaid <br/>
                                                - isi nomor 1-4, 9-14 untuk registrasi TCASH full service dan upgrade TCASH full service
                                                <br/>
                                                - nomor 5-8 diisi jika pelanggan adalah WNA <br/>
                                                - Untuk Pelanggan Corporate(Corporate Paid) data yang diisi adalah data PIC Corporate
                                                <br/>
                                            </div>
        
                                        </div>
        
                                    </div>
                                    {/* <!-- End form kiri --> */}
        
                                    {/* <!-- Form kanan --> */}
                                    <div className="col-md-6">
                                        <div className="form-group col-md-12 custom-bg-form">
                                            <label> Produk dan Fitur <sup>1</sup>: </label><br/>
                                            <input type="checkbox" /> Paket Dasar <input type="text" /> <br/>
                                            &nbsp;&nbsp;&nbsp;<input type="checkbox" /> HaloFit Hybrid <input type="text" /> <br/>
                                            &nbsp;&nbsp;&nbsp;<input type="checkbox" /> HaloFit / Halofit MyPlan <input type="text" /><br/>
                                            &nbsp;&nbsp;&nbsp;<input type="checkbox" /> New My Plan <input type="text" /><br/>
                                            &nbsp;&nbsp;&nbsp;<input type="checkbox" /> Telkomsel Flash <input type="text" /><br/>
                                            &nbsp;&nbsp;&nbsp;<input type="checkbox" /> Produk Kontrak
                                            <input type="text" className="wta-20" /> Periode Kontrak
                                            <input type="text" className="wta-10" />Bulan <br/>
                                            <input type="checkbox" /> Produk/Fitur Lainnya <input type="text" /><br />
                                            <br />
                                            CLS : <br />
                                            - Domestik : <br />
                                            (Non Paket)<sup>2</sup> <input type="text" /><br />
                                            - IR : <br />
                                            (Non Voice)<sup>3</sup> <input type="text" /><br />
                                            <br />
                                            <div className="i-text">
                                                <sup>1)</sup> Setelah periode belangganan 12 bulan selesai, sebelum habis masa periode,
                                                pelanggan akan mendapatkan notifikasi untuk memperpanjang layanan berjangka atau
                                                tidak, apabila pelanggan tidak menjawab maka akan diaktifkan sesuai
                                                paket berjalan tetapi tidak terkait periode aktivasi pake berlangganan. <br />
                                                <sup>2)</sup> Layanan Telkomsel yang tidak termasuk dalam paket (Contoh Paket: HaloFit
                                                125).
                                                <br />
                                                <sup>3)</sup> Layanan Telkomsel yang tidak termasuk panggilan suara.
                                            </div>
                                        </div>
        
                                        <div className="form-group col-md-12 custom-bg-form">
                                            <label>Informasi Tagihan :</label> <br />
                                            Billing Cycle : <input type="text" /><br />
                                            Tanggal Jatuh Tempo Pembayaran kartuHalo : <input type="text" className="wta-25" /><br />
                                            Pengiriman Tagihan : <br />
                                            Consumer/Telkomsel : <input type="checkbox" /> e-Bill/CD Billing <br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <input type="checkbox" /> Single Invoice Faktur Pajak <br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <input type="checkbox" /> Single Invoice non Faktur Pajak <br />
                                        </div>
        
                                        <div className="form-group col-md-12 custom-bg-form">
                                            <label>Jenis Pembayaran :</label> <br />
                                            <input type="checkbox" /> Auto debet Kartu kredit &nbsp;&nbsp; <input type="checkbox" /> Tunai
                                            <br />
                                            <input type="checkbox" /> Auto debet Rekening &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <input type="checkbox" />
                                            Transfer/Virtual
                                            Account<br />
                                            No Kartu Kredit/rekening :
                                            <input type="text" /><br />
                                            Jenis Kartu : <input type="checkbox" /> Visa &nbsp; <input type="checkbox" /> MasterCard <br />
                                            Masa Berlaku : <input type="text" /> MM/ <input type="text" /> YY <br />
                                            Bank Penerbit : <input type="checkbox" /> BCA &nbsp; <input type="checkbox" /> BNI &nbsp;
                                            <input type="checkbox" /> Bank Mandiri &nbsp;
                                            <input type="checkbox" /> Citibank <br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <input type="checkbox" /> Bank Mega &nbsp; <input type="checkbox" /> Lainnya <input type="text" className="wta-25" />
                                        </div>
        
                                        <div className="form-group col-md-12 custom-bg-form">
                                            <label>Orang lain yang bisa dihubungi / Penanggung Jawab / PIC Perusahaan:</label>
                                            Nama &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input type="text" className="wta-65" /> <br />
                                            Hubungan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input type="text" className="wta-65" /><br />
                                            Alamat &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input type="text" className="wta-65" /> <br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" className="wta-65" /> <br />
                                            Nomor Telepon : <input type="text" className="wta-65" /> <br />
                                            Alamat Email &nbsp;&nbsp;&nbsp; :<input type="text" className="wta-65" /> <br />
                                        </div>
        
                                        <div className="form-group col-md-12 custom-bg-form">
                                            Pelanggan bersedia menerima informasi SMS broadcast, e-mail atau
                                            sejenisnya dari Telkomsel yang berisi informasi layanan dan/atau produk
                                            Telkomsel dan mitranya <br />
                                            <div className="text-right">
                                                <input type="checkbox" defaultChecked={true} /> Ya <input type="checkbox" /> Tidak
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End form kanan --> */}
                                    <br/>
                                </div>
        
                                {/* <!-- Form Bawah --> */}
                                <div className="col-md-12 mt-30">
                                    <div className="row col-md-12 mt-30">
                                        <div className="col-md-4 text-center">
                                            <input type="text" className="wta-37 input-teks-transparent" style={{textAlign: 'center'}} defaultValue="Jakarta" />,
                                            <input type="text" className="wta-37 input-teks-transparent" defaultValue={`${getDateMonth()[0]} ${getDateMonth()[1]}`} />2020<br />
                                            Pelanggan telah mengerti, memahami dan
                                            menerima syarat dan ketentuan yang berlaku
                                        </div>
                                        <div className="col-md-4 text-center">
                                            Menyetujui Kartu Utama/<br/>
                                            Penanggung Jawab
                                        </div>
                                        <div className="col-md-4 text-center">
                                            Petugas<br />
                                        </div>
        
                                        <div className="mt-100">
                                            <div className="col-md-4 text-center">
                                                <img src={`data:image/png;base64,${dataKTP.signature}`} alt="customer-signature" />
                                                <br /><br />
                                                <input type="text" className="input-teks-transparent wta-80" style={{textAlign: 'center'}} defaultValue={dataKTP.name} /><br />
                                                Nama Lengkap Pelanggan
                                            </div>
                                            <div className="col-md-4 text-center">
                                                <br /><br /><br />
                                                <input type="text" className="input-teks-transparent wta-80" /><br />
                                                Nama Lengkap
                                            </div>
                                            <div className="col-md-4 text-center">
                                                <br /><br /><br />
                                                <input type="text" className="input-teks-transparent wta-80" /><br />
                                                T-Care Machine
                                            </div>
        
                                        </div>
                                    </div>
        
                                    <br /><br />
        
                                    <div className="col-md-12 i-text">
                                        <label className="mt-25">Keterangan : </label><br />
                                        a) Data diatas wajib diisi dan dilengkapi sesuai dengan ketentuan yang ada dalam Instruksi Kerja
                                        " Pengisian Formulir Pasang Baru kartuHalo". <br />
                                        b) Jika terdapat pemberian kuasa, wajib melampirkan surat kuasa asli bermaterai cukup. <br />
                                        c) Khusus untuk tipe Pelanggan Corporate, Jika terdapat pertentangan antara ketentuan di dalam
                                        refrensi Dokumen dengan ketentuan dalam formulir ini, maka yang berlaku adalah ketentuan di
                                        dalam
                                        Refrensi Dokumen. <br />
                                        d) Segala biaya yang telah dibayarkan Pelanggan untuk keperluan pendaftaran atay registrasi
                                        kartuHalo tidak dapat dikembalikan. <br />
                                        e) Pembayaran pajak materai atas dokumen ini dilakukan bersamaan dengan pembayaran tagihan
                                        pertama.
                                        <br />
                                        f) Dokumen ini dinyatakan sah tanpa ditanda tangani pelanggan, mengacu kepada ketentuan
                                        perundangan
                                        yang berlaku diantaranya namun tidak terbatas pada Undang-undang Republik Indonesia nomor 11
                                        tahun
                                        2008 tentag informasi dan transaksi elektronik.
                                    </div>
                                </div>
                                {/* <!-- End form bawah --> */}
        
                            </form>
        
                        </div>
                    </div>
                )}
                {this.state.showFormulirPDF &&
                    <embed src={this.state.docman} type="application/pdf" width='100%' height='1000px' title='Docman MyG eKTP' />
                }
                {this.state.showKtpPDF &&
                    <embed src={this.state.ktp} type="application/pdf" width='100%' height='1000px' title='Docman MyG eKTP' />
                }
            </Fragment>
        )
    }
}

export default withRouter(ReactToPDF)