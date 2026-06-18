import { TextField, Button, Stack, ButtonGroup } from "@mui/material";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

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

  const onSubmit = (data: LoginFormData) => {
    if (isRegForm) {
      console.log("Registration data:", data);
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