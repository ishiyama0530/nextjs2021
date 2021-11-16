import { Button, Stack, TextField } from "@mui/material"
import React, { ReactElement } from "react"
import MasterLayout from "../../components/layout/MasterLayout"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod/dist/zod"
import * as z from "zod"
import { useSetRecoilState } from "recoil"
import { authState } from "../../store/auth"

const schema = z.object({
  username: z.string().nonempty({ message: "Please input username" }),
  password: z.string().nonempty({ message: "Please input password" }),
})

type FormData = z.infer<typeof schema>

const LoginPage = () => {
  const setAuthState = useSetRecoilState(authState)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = (data: FormData) => {
    setAuthState({
      user: { name: data.username },
    })
  }

  return (
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
        autoFocus
        {...register("username")}
        error={errors.username?.message}
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
        error={errors.password?.message}
        helperText={errors.password?.message}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Log In
      </Button>
    </Stack>
  )
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <MasterLayout maxWidth="xs">{page}</MasterLayout>
}

export default LoginPage