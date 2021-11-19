import { useRecoilValue } from "recoil"
import { authState } from "../store/auth"

export type User = {
  name: string
}

export type Session = {
  user: User
}

export function useSession(): Session | undefined {
  const user = useRecoilValue(authState)?.user

  if (!user) {
    return undefined
  }

  return {
    user: {
      name: user.name,
    },
  }
}
