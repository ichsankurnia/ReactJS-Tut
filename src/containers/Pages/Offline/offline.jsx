import React from 'react';
import logo from './../../../assets/img/logo-telkomsel.png';
import './offline.css';

function OfflinePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 style={{marginTop: 60}}>Tidak ada koneksi internet</h2>
        <h3 style={{marginTop: -15, marginBottom: 45}}>Harap hubungi Customer Service MyGraPARI</h3>
        <button style={{width: '35%', paddingTop: 10, paddingBottom: 10, fontSize: 27, fontWeight: 550, color: '#fff', borderRadius: 10, borderStyle: 'solid', borderColor: '#ED1C24', backgroundColor: '#ED1C24', cursor: 'pointer'}}
                onClick={() => window.location.reload()}>
            Muat ulang
        </button>
        {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Muat Ulang</a> */}
      </header>
    </div>
  );
}

export default OfflinePage;
