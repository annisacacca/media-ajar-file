// src/components/RetroWindow/RetroWindow.jsx
// Jendela retro: title bar + tiga tombol kecil + bayangan keras.
import './RetroWindow.css'

export default function RetroWindow({ judul, children, className = '' }) {
  return (
    <section className={`jendela ${className}`.trim()}>
      <header className="jendela__bar">
        <span className="jendela__judul">{judul}</span>
        <span className="jendela__tombol" aria-hidden="true">
          <i className="jendela__btn jendela__btn--kuning" />
          <i className="jendela__btn jendela__btn--hijau" />
          <i className="jendela__btn jendela__btn--merah" />
        </span>
      </header>
      <div className="jendela__isi">{children}</div>
    </section>
  )
}