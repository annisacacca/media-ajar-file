// src/components/icons/CodeIcon.jsx
import PixelGrid from '../pixel/PixelGrid'

const BARIS = [
  'kkkkkkkkkkkk',
  'kbbbbbbbbbbk',
  'kbbbybbybbbk',
  'kbbybbbbybbk',
  'kbybbbbbbybk',
  'kbbybbbbybbk',
  'kbbbybbybbbk',
  'kbbbbbbbbbbk',
  'kkkkkkkkkkkk',
]

export default function CodeIcon(props) {
  return <PixelGrid baris={BARIS} {...props} />
}