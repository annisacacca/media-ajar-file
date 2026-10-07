// src/components/Dika/Dika.jsx
// Maskot Dika: pixel art dari SVG <rect>. Pakai: <Dika ekspresi="bingung" ukuran={180} />
import { useMemo } from 'react'
import { PALET, parseBaris } from '../pixel/pixelUtils'
import './Dika.css'

// Kanvas 24x24 kotak: badan 16x19 + ruang kosong untuk properti di sekitar kepala
const OX = 4 // geser horizontal badan di kanvas
const OY = 5 // geser vertikal badan di kanvas
const KANVAS = 24

const KOSONG = '.'.repeat(16)

// Badan Dika (baris 0-18). Wajah ditimpa lapisan ekspresi di baris 4-9.
const BADAN = [
  '....kkkkkkkk....', // 0  rambut
  '...kkkkkkkkkk...', // 1
  '..kkkkkkkkkkkk..', // 2
  '..kkkkkkkkkkkk..', // 3
  '..kkkssssssskk..', // 4  poni + wajah
  '..kssssssssssk..', // 5
  '..kssssssssssk..', // 6
  '..kssssssssssk..', // 7
  '..kssssssssssk..', // 8
  '...kssssssssk...', // 9
  '....kkkkkkkk....', // 10 dagu
  '...kwwwwwwwwk...', // 11 kerah
  '..kwwwwrrwwwwk..', // 12 seragam putih + dasi merah
  '..kwwwwrrwwwwk..', // 13
  '..kwwwwrrwwwwk..', // 14
  '..kwwwwwwwwwwk..', // 15
  '..kbbbbbbbbbbk..', // 16 celana biru
  '..kbbbk..kbbbk..', // 17 kaki
  '..kkkkk..kkkkk..', // 18 sepatu
]

// Properti kecil yang ditempel di sekitar Dika
const TANDA_TANYA = { x: 14, y: -2, baris: ['.rr.', 'r..r', '..r.', '....', '..r.'] }
const TANDA_SERU = { x: 14, y: -2, baris: ['rr', 'rr', 'rr', '..', 'rr'] }
const AWAN_PIKIR = {
  x: 12,
  y: -5,
  baris: ['.kkkkk.', 'kwwwwwk', 'kwkwkwk', 'kwwwwwk', '.kkkkk.'],
}
const TITIK_PIKIR = { x: 13, y: 0, baris: ['k'] }
const KILAU = ['.k.', 'kyk', '.k.']
const MEDALI = { x: 4, y: 12, baris: KILAU }

// Setiap ekspresi: 'wajah' = 6 baris (baris 4 sampai 9 badan), 'ekstra' = properti
const EKSPRESI = {
  senang: {
    wajah: [KOSONG, '.....k....k.....', '....k.k..k.k....', '...ppk....kpp...', '......kkkk......', KOSONG],
    ekstra: [],
  },
  bingung: {
    wajah: ['.........kkk....', '..........k.....', '.....k....k.....', KOSONG, '......kk.kk.....', KOSONG],
    ekstra: [TANDA_TANYA],
  },
  mikir: {
    wajah: [KOSONG, '......k....k....', '......k....k....', KOSONG, '......kk........', KOSONG],
    ekstra: [AWAN_PIKIR, TITIK_PIKIR],
  },
  kaget: {
    wajah: ['.....kk..kk.....', '....www..www....', '....wkw..wkw....', '....www..www....', '......kkkk......', '......krrk......'],
    ekstra: [TANDA_SERU],
  },
  semangat: {
    wajah: ['.....kk..kk.....', '....kk....kk....', '....kw....wk....', '......kkkk......', '......krrk......', '......kkkk......'],
    ekstra: [
      { x: 14, y: 1, baris: KILAU },
      { x: -3, y: 4, baris: KILAU },
    ],
  },
  sedih: {
    wajah: [KOSONG, KOSONG, '.....k....k.....', '.....k....k.....', '.....b.kk.b.....', '.....bk..kb.....'],
    ekstra: [],
  },
  bangga: {
    wajah: [KOSONG, '.....k....k.....', '....k.k..k.k....', '......kkkk......', '......krrk......', '......kkkk......'],
    ekstra: [
      MEDALI,
      { x: 14, y: 1, baris: KILAU },
      { x: -3, y: 3, baris: KILAU },
    ],
  },
}

export const DAFTAR_EKSPRESI = Object.keys(EKSPRESI)

// Gabungkan badan + wajah + properti jadi satu daftar kotak (yang belakangan menimpa yang awal)
function susunSel(nama) {
  const data = EKSPRESI[nama]
  const peta = new Map()
  const taruh = (daftar) => daftar.forEach((s) => peta.set(`${s.x},${s.y}`, s))

  taruh(parseBaris(BADAN))
  taruh(parseBaris(data.wajah, 0, 4))
  data.ekstra.forEach((e) => taruh(parseBaris(e.baris, e.x, e.y)))

  return [...peta.values()]
}

// ekspresi: senang | bingung | mikir | kaget | semangat | sedih | bangga
// ukuran: angka (px) atau teks CSS. animasi: false untuk mematikan gerak idle.
export default function Dika({ ekspresi = 'senang', ukuran = 160, animasi = true, className = '' }) {
  const nama = EKSPRESI[ekspresi] ? ekspresi : 'senang'
  const sel = useMemo(() => susunSel(nama), [nama])
  const lebarCss = typeof ukuran === 'number' ? `${ukuran}px` : ukuran
  const kelas = `dika dika--${nama}${animasi ? ' dika--idle' : ''} ${className}`.trim()

  return (
    <div className={kelas} style={{ width: lebarCss }}>
      <svg
        viewBox={`0 0 ${KANVAS} ${KANVAS}`}
        shapeRendering="crispEdges"
        role="img"
        aria-label={`Dika sedang ${nama}`}
      >
        {sel.map(({ x, y, c }) => (
          <rect key={`${x},${y}`} x={x + OX} y={y + OY} width="1" height="1" style={{ fill: PALET[c] }} />
        ))}
      </svg>
    </div>
  )
}