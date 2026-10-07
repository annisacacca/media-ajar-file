// src/components/icons/FullscreenIcon.jsx
import PixelGrid from '../pixel/PixelGrid'

const BARIS = [
  'kkkk....kkkk',
  'k..........k',
  'k..........k',
  'k..........k',
  '............',
  '............',
  '............',
  '............',
  'k..........k',
  'k..........k',
  'k..........k',
  'kkkk....kkkk',
]

export default function FullscreenIcon(props) {
  return <PixelGrid baris={BARIS} {...props} />
}