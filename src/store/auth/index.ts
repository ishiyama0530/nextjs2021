import { atom, selector } from "recoil"

type Auth = {
  user?: { name: string }
}

export const authState = atom<Auth>({
  key: "authState",
  default: {},
})

export const checkAuthSelector = selector<boolean>({
  key: "checkAuthSelector",
  get: ({ get }) => {
    const auth: Auth = get(authState)
    return !!auth.user
  },
})
