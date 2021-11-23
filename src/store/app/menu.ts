import { atom } from "recoil"

type Layer1Shrink = boolean

export const layer1ShrinkState = atom<Layer1Shrink>({
  key: "layer1Shrink",
  default: false,
})
