// src/components/icons/AudioIcon.jsx
import PixelGrid from '../pixel/PixelGrid'

// Speaker dengan gelombang suara (dipakai untuk kategori audio/video)
const BARIS = [
  '......k.....',
  '.....kyk..r.',
  '..kkkyyk...r',
  '..kyyyyk.r.r',
  '..kyyyyk.r.r',
  '..kyyyyk.r.r',
  '..kkkyyk...r',
  '.....kyk..r.',
  '......k.....',
]

export default function AudioIcon(props) {
  return <PixelGrid baris={BARIS} {...props} />
}