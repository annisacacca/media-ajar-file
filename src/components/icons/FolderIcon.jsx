// src/components/icons/FolderIcon.jsx
import PixelGrid from '../pixel/PixelGrid'

const BARIS = [
  '.kkkk.......',
  'kyyyykkkkkk.',
  'kcccccccccck',
  'kyyyyyyyyyyk',
  'kyyyyyyyyyyk',
  'kyyyyyyyyyyk',
  'kyyyyyyyyyyk',
  'kyyyyyyyyyyk',
  'kyyyyyyyyyyk',
  'kkkkkkkkkkkk',
]

export default function FolderIcon(props) {
  return <PixelGrid baris={BARIS} {...props} />
}