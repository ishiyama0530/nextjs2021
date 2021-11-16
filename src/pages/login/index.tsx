import { zodResolver } from "@hookform/resolvers/zod/dist/zod"
import { Button, Stack, TextField } from "@mui/material"
import { useRouter } from "next/dist/client/router"
import React, { ReactElement } from "react"
import { useForm } from "react-hook-form"
import { useToggle } from "react-use"
import { useSetRecoilState } from "recoil"
import * as z from "zod"
import { MasterLayout } from "../../components/layout/MasterLayout"
import { FormProgress } from "../../components/progress/FormProgress"
import { authState } from "../../store/auth"

const schema = z.object({
  username: z.string().nonempty({ message: "Please input username" }),
  password: z.string().nonempty({ message: "Please input password" }),
})

type FormData = z.infer<typeof schema>

const LoginPage = () => {
  const router = useRouter()
  const setAuthState = useSetRecoilState(authState)
  const [loading, toggleLoading] = useToggle(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = (data: FormData) => {
    toggleLoading()
    setTimeout(() => {
      setAuthState({
        user: { name: data.username },
      })
      router.push("/")
    }, 2000)
  }

  return (
    <FormProgress loading={loading}>
      <Stack
        component="form"
        direction="column"
        alignItems="center"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="UserName"
          autoComplete="name"
          {...register("username")}
          error={!!errors.username?.message}
          helperText={errors.username?.message}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          {...register("password")}
          error={!!errors.password?.message}
          helperText={errors.password?.message}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          LogIn
        </Button>
      </Stack>
    </FormProgress>
  )
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <MasterLayout maxWidth="xs">{page}</MasterLayout>
}

export default LoginPage
