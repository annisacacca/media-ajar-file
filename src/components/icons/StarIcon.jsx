// src/components/icons/StarIcon.jsx
import PixelGrid from '../pixel/PixelGrid'

const BARIS = [
  '.....k.....',
  '....kyk....',
  '...kyyyk...',
  'kkkkyyykkkk',
  'kyyyyyyyyyk',
  '.kyyyyyyyk.',
  '..kyyyyyk..',
  '..kyyyyyk..',
  '.kyyykyyyk.',
  '.kyykkkyyk.',
  '.kkk...kkk.',
]

export default function StarIcon(props) {
  return <PixelGrid baris={BARIS} {...props} />
}