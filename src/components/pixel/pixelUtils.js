// src/components/pixel/pixelUtils.js
// Pixel art kita gambar dari "baris teks". Tiap huruf = 1 kotak warna, titik (.) = kosong.

export const PALET = {
  k: 'var(--ink)',
  b: 'var(--blue)',
  y: 'var(--yellow)',
  r: 'var(--red)',
  g: 'var(--green)',
  c: 'var(--cream)',
  w: 'var(--white)',
  s: 'var(--skin)',
  p: 'var(--pink)',
  l: 'var(--sky)', // langit
}

// Ubah array baris teks menjadi daftar kotak {x, y, c}.
// x0 dan y0 = geser posisi (dipakai untuk menempel gambar kecil ke gambar besar).
export function parseBaris(baris, x0 = 0, y0 = 0) {
  const hasil = []
  baris.forEach((teks, y) => {
    ;[...teks].forEach((c, x) => {
      if (c !== '.' && PALET[c]) hasil.push({ x: x + x0, y: y + y0, c })
    })
  })
  return hasil
}