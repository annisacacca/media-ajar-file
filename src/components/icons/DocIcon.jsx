// src/components/icons/DocIcon.jsx
import PixelGrid from '../pixel/PixelGrid'

const BARIS = [
  'kkkkkkk...',
  'kcccccck..',
  'kccccccck.',
  'kcccccccck',
  'kcbbbbbbck',
  'kcccccccck',
  'kcbbbbbbck',
  'kcccccccck',
  'kcbbbbccck',
  'kcccccccck',
  'kcccccccck',
  'kkkkkkkkkk',
]

export default function DocIcon(props) {
  return <PixelGrid baris={BARIS} {...props} />
}