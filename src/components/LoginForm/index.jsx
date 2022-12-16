import { useForm } from "react-hook-form";
import { loginSchema } from "./loginSchema";
import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
 
export function LoginForm() {
  const { login } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema)
  });



  return (
    <>
      <form action="submit" onSubmit={handleSubmit(login)} noValidate>
        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="text" {...register("email")} />
        {errors.email?.message && <p>{errors.email.message}</p>}

        <label htmlFor="input-password">Senha</label>
        <input id="input-password" type="text" {...register("password")} />
        {errors.password?.message && <p>{errors.password.message}</p>}

        <button type="submit">Entrar</button>
      </form>
    </>
  );
}
