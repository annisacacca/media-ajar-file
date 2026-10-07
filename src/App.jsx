// src/App.jsx
// Sementara (Tahap 1): loading screen -> galeri untuk mengecek Dika dan ikon.
import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import RetroWindow from './components/RetroWindow/RetroWindow'
import Dika, { DAFTAR_EKSPRESI } from './components/Dika/Dika'
import * as Ikon from './components/icons'
import './App.css'

function Galeri({ onUlang }) {
  return (
    <main className="galeri">
      <RetroWindow judul="Dika.exe">
        <div className="galeri__kisi">
          {DAFTAR_EKSPRESI.map((e) => (
            <figure className="galeri__item" key={e}>
              <Dika ekspresi={e} ukuran={150} />
              <figcaption>{e}</figcaption>
            </figure>
          ))}
        </div>
      </RetroWindow>

      <RetroWindow judul="Ikon.exe">
        <div className="galeri__kisi">
          {Object.entries(Ikon).map(([nama, Komponen]) => (
            <figure className="galeri__item" key={nama}>
              <Komponen ukuran={72} judul={nama} />
              <figcaption>{nama}</figcaption>
            </figure>
          ))}
        </div>
      </RetroWindow>

      <button type="button" className="tombol" onClick={onUlang}>
        Ulangi loading
      </button>
    </main>
  )
}

export default function App() {
  const [tahap, setTahap] = useState('loading')

  return (
    <div className={`latar ${tahap === 'loading' ? 'latar--lantai' : 'latar--polos'}`}>
      {tahap === 'loading' ? (
        <LoadingScreen onMulai={() => setTahap('galeri')} />
      ) : (
        <Galeri onUlang={() => setTahap('loading')} />
      )}
    </div>
  )
}