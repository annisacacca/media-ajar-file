// src/components/LoadingScreen/LoadingScreen.jsx
import { useEffect, useRef, useState } from 'react'
import Dika from '../Dika/Dika'
import { StarIcon } from '../icons'
import './LoadingScreen.css'

const JUMLAH_BLOK = 20 // jumlah kotak di progress bar
const JEDA_MS = 180 // kecepatan isi per kotak (total sekitar 3,6 detik)

export default function LoadingScreen({ onMulai }) {
  const [blok, setBlok] = useState(0)
  const tombolRef = useRef(null)
  const siap = blok >= JUMLAH_BLOK

  useEffect(() => {
    if (siap) {
      // Setelah penuh, fokuskan tombol supaya Enter/Spasi langsung bisa memulai
      tombolRef.current?.focus()
      return
    }
    const id = setInterval(() => setBlok((b) => Math.min(JUMLAH_BLOK, b + 1)), JEDA_MS)
    return () => clearInterval(id)
  }, [siap])

  return (
    // Seluruh layar bisa diklik setelah loading selesai
    <div className={`layar loading${siap ? ' loading--siap' : ''}`} onClick={siap ? onMulai : undefined}>
      <div className="awan loading__awan1" />
      <div className="awan loading__awan2" />

      <div className="komputer">
        <div className="komputer__layar">
          <h1 className="loading__judul">MEDIA AJAR</h1>
          <p className="loading__sub">Manajemen File</p>

          <div
            className={`loading__bar${siap ? ' loading__bar--penuh' : ''}`}
            role="progressbar"
            aria-label="Memuat"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round((blok / JUMLAH_BLOK) * 100)}
          >
            {Array.from({ length: JUMLAH_BLOK }, (_, i) => (
              <span key={i} className={i < blok ? 'isi' : ''} />
            ))}
          </div>

          <div className="loading__status">
            {siap ? (
              <button ref={tombolRef} type="button" className="tombol loading__mulai">
                Klik untuk mulai
              </button>
            ) : (
              <span>LOADING...</span>
            )}
          </div>

          {/* Taskbar hiasan di dasar layar */}
          <div className="komputer__tugas" aria-hidden="true">
            <span>Mulai</span>
            <span>Info X</span>
          </div>
        </div>

        <div className="komputer__bawah" aria-hidden="true">
          <span className="komputer__celah" />
          <span className="komputer__lampu" />
        </div>

        {/* Stiker-stiker kecil */}
        <span className="stiker stiker--info">INFORMATIKA</span>
        <span className="stiker stiker--kelas">KELAS X</span>
        <StarIcon className="loading__bintang" ukuran="calc(var(--u) * 4)" />
      </div>

      <Dika
        className="loading__dika"
        ekspresi={siap ? 'semangat' : 'mikir'}
        ukuran="calc(var(--u) * 15)"
      />
    </div>
  )
}