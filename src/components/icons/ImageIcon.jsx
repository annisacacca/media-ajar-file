// src/components/icons/ImageIcon.jsx
import PixelGrid from '../pixel/PixelGrid'

const BARIS = [
  'kkkkkkkkkkkk',
  'kllllllllllk',
  'kllllllyyllk',
  'kllllllyyllk',
  'klllbllllllk',
  'kllbbbllbllk',
  'klbbbbbbbblk',
  'kggggggggggk',
  'kggggggggggk',
  'kkkkkkkkkkkk',
]

export default function ImageIcon(props) {
  return <PixelGrid baris={BARIS} {...props} />
}