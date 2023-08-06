import { proxy } from "valtio"

export const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './brazil_flag.png',
  fullDecal: './threejs.png',
})