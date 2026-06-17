import { TextField, Button, Stack } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

type LoginFormData = {
  email: string;
  password: string;
};

const LoginForm = () => {

  const {handleSubmit, control} = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
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
        
        <Button type="submit" variant="contained">
          Login
        </Button>
      </Stack>
    </form>
  );
}
 
export default LoginForm;