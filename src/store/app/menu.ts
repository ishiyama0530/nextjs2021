import { atom } from "recoil"

type layer1MenuOpen = boolean

export const layer1MenuOpenState = atom<layer1MenuOpen>({
  key: "layer1MenuOpenState",
  default: false,
})
