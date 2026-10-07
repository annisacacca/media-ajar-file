// src/components/pixel/PixelGrid.jsx
// Menggambar array baris teks menjadi SVG berisi kotak-kotak <rect>.
import { PALET, parseBaris } from './pixelUtils'

// ukuran: angka (px) atau teks CSS, misalnya 'calc(var(--u) * 6)'
export default function PixelGrid({ baris, ukuran = 48, judul, className = '' }) {
  const lebar = baris[0].length
  const tinggi = baris.length
  const lebarCss = typeof ukuran === 'number' ? `${ukuran}px` : ukuran

  return (
    <svg
      className={`pixel-ikon ${className}`.trim()}
      viewBox={`0 0 ${lebar} ${tinggi}`}
      style={{ width: lebarCss, height: 'auto', display: 'block' }}
      shapeRendering="crispEdges" /* tepi tajam, tidak buram */
      role={judul ? 'img' : undefined}
      aria-hidden={judul ? undefined : true}
      focusable="false"
    >
      {judul && <title>{judul}</title>}
      {parseBaris(baris).map(({ x, y, c }) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" style={{ fill: PALET[c] }} />
      ))}
    </svg>
  )
}