// src/components/icons/TrashIcon.jsx
import PixelGrid from '../pixel/PixelGrid'

const BARIS = [
  '...kkkk...',
  'kkkkkkkkkk',
  '.kbbbbbbk.',
  '.kbcbbcbk.',
  '.kbcbbcbk.',
  '.kbcbbcbk.',
  '.kbcbbcbk.',
  '.kbcbbcbk.',
  '.kbbbbbbk.',
  '.kkkkkkkk.',
]

export default function TrashIcon(props) {
  return <PixelGrid baris={BARIS} {...props} />
}