import { TextField, Button, Stack, ButtonGroup } from "@mui/material";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

type LoginFormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [isRegForm, setIsRegForm] = useState(false);

  const {handleSubmit, control, reset} = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {

    const auth = getAuth()

    if (isRegForm) {
      try {
        await createUserWithEmailAndPassword(auth, data.email, data.password);
      } 
      catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    } else {
      console.log("Login data:", data);
    }
    reset();
  }

  return ( 
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>

        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email обязателен",
          }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Email"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{
            required: "Пароль обязателен",
          }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Password"
              type="password"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
        
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button type="submit" onClick={() => setIsRegForm(false)}>Auth</Button>
          <Button type="submit" onClick={() => setIsRegForm(true)}>Register</Button>
        </ButtonGroup>
      </Stack>
    </form>
  );
}
 
export default LoginForm;