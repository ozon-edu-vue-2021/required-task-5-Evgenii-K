import images from '../assets/data/images.json'

export function random (min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 0.5))
}

export function randomImage () {
  const selected = Math.round(0 + Math.random() * 11)
  return `${images[selected].name}.webp`
}

