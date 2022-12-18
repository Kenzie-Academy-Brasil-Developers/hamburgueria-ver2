import { useForm } from "react-hook-form";
import { loginSchema } from "./loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { StyledForm } from "./styled";
import { Link } from "react-router-dom";

export interface ILoginForm{
  email: string;
  password: string;
}

export function LoginForm() {
  const { login } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  return (
    <StyledForm>
      <h1>Login</h1>
      <form action="submit" onSubmit={handleSubmit(login)} noValidate>
        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="text" {...register("email")} />
        {errors.email?.message && <p>{errors.email.message}</p>}

        <label htmlFor="input-password">Senha</label>
        <input id="input-password" type="text" {...register("password")} />
        {errors.password?.message && <p>{errors.password.message}</p>}

        <button type="submit">Entrar</button>
      </form>
      <div className="redirect-register">
        <span>Crie sua conta para saborear muitas delícias e</span>
        <span>matar sua fome!</span>
        <Link to="/register">Cadastrar</Link>
      </div>
    </StyledForm>
  );
}
