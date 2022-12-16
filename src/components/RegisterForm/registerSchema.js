import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("A senha obrigatória")
    .matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula.")
    .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula.")
    .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "É necessário pelo menos um caractere especial"
    )
    .min(8, "É necessário pelomenos 8 caracteres")
    .max(20, "20 caracteres máximo para senha"),

  confirmPassword: yup
    .string()
    .required("Confirme a senha")
    .oneOf([yup.ref("password"), null], "Não está idêntico á senha"),
});
