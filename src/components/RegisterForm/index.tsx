import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../providers/UserContext";
import { StyledForm } from "../LoginForm/styled";
import { registerSchema } from "./registerSchema";
import { Link } from "react-router-dom";

export interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function RegisterForm() {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  return (
    <StyledForm>
      <div className="register-header">
        <h1>Cadastro</h1>
        <Link to="/" className="redirect-login">
          Retornar para o Login
        </Link>
      </div>
      <form action="submit" onSubmit={handleSubmit(registerUser)} noValidate>
        <label htmlFor="input-name">Nome</label>
        <input
          type="text"
          id="input-name"
          {...register("name")}
          placeholder={"Seu nome"}
        />
        {errors.name?.message && <p>{errors.name.message}</p>}

        <label htmlFor="input-email">Email</label>
        <input
          type="text"
          id="input-email"
          {...register("email")}
          placeholder={"Seu email"}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}

        <label htmlFor="input-password">Senha</label>
        <input
          type="text"
          id="input-password"
          {...register("password")}
          placeholder={"Sua senha"}
        />
        {errors.password?.message && <p>{errors.password.message}</p>}

        <label htmlFor="input-confirm-password">Confirmar Senha</label>
        <input
          type="text"
          id="input-confirm-password"
          {...register("confirmPassword")}
          placeholder={"Confirme sua senha"}
        />
        {errors.confirmPassword?.message && (
          <p>{errors.confirmPassword.message}</p>
        )}

        <button type="submit">Cadastrar</button>
      </form>
    </StyledForm>
  );
}
