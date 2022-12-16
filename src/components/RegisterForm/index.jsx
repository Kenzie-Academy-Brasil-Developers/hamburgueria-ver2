import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../providers/UserContext";
import { registerSchema } from "./registerSchema";

export function RegisterForm() {
  const { registerUser } = useContext(UserContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(registerSchema),
    });
   

  return (
    <form action="submit" onSubmit={handleSubmit(registerUser)} noValidate>
      <label htmlFor="input-name">Nome</label>
      <input
        type="text"
        id="input-name"
        {...register("name")}
        placeholder={"Digite aqui seu nome"}
      />
      {errors.name?.message && <span>{errors.name.message}</span>}

      <label htmlFor="input-email">Email</label>
      <input
        type="text"
        id="input-email"
        {...register("email")}
        placeholder={"Digite aqui seu email"}
      />
      {errors.email?.message && <span>{errors.email.message}</span>}

      <label htmlFor="input-password">Senha</label>
      <input
        type="text"
        id="input-password"
        {...register("password")}
        placeholder={"Digite aqui sua senha"}
      />
      {errors.password?.message && <span>{errors.password.message}</span>}

      <label htmlFor="input-confirm-password">Confirmar Senha</label>
      <input
        type="text"
        id="input-confirm-password"
        {...register("confirmPassword")}
        placeholder={"Confirme sua senha"}
      />
      {errors.confirmPassword?.message && <span>{errors.confirmPassword.message}</span>}

      <button type="submit">Cadastrar</button>
    </form>
  );
}
