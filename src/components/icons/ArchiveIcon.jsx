// src/components/icons/ArchiveIcon.jsx
import PixelGrid from '../pixel/PixelGrid'

// Kotak arsip dengan resleting (zip)
const BARIS = [
  'kkkkkkkkkkkk',
  'krrrrykrrrrk',
  'krrrrkyrrrrk',
  'kkkkkkkkkkkk',
  'kcccckycccck',
  'kccccykcccck',
  'kcccckycccck',
  'kccccykcccck',
  'kcccckycccck',
  'kkkkkkkkkkkk',
]

export default function ArchiveIcon(props) {
  return <PixelGrid baris={BARIS} {...props} />
}