import { useRecoilValue } from "recoil"
import { authState, checkAuthSelector } from "../store/auth"

export type User = {
  name: string
}

export type Session = {
  user: User
}

export function useSession(): Session | undefined {
  const auth = useRecoilValue(checkAuthSelector)
  const user = useRecoilValue(authState)?.user

  if (!auth) {
    return undefined
  }

  return {
    user: {
      name: user!.name,
    },
  }
}
