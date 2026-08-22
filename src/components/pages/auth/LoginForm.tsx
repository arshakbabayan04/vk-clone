import { TextField, Button, Stack, ButtonGroup, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../providers/useAuth";
import { useNavigate } from "react-router-dom";

type LoginFormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {ga, user} = useAuth();

  const [isRegForm, setIsRegForm] = useState(false);
  const [error, setError] = useState('');

  const {handleSubmit, control, reset} = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {

    if (isRegForm) {
      try {
        await createUserWithEmailAndPassword(ga, data.email, data.password);
        reset();
      } 
      catch (error) {
        if (error instanceof Error && error.message) {
          setError(error.message);
        }
      }
    } else {
      try {
        await signInWithEmailAndPassword(ga, data.email, data.password);
        reset();
      } 
      catch (error) {
        if (error instanceof Error && error.message) {
          setError(error.message);
        }
      }
    }
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return ( 
    <>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
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
    </>
  );
}
 
export default LoginForm;