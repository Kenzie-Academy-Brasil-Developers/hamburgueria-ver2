import { LoginRegisterDecoration } from "../../components/LoginRegisterDecoration";
import { RegisterForm } from "../../components/RegisterForm";
import { StyledRegister } from "./styles";

export function RegisterPage() {
  return (
    <StyledRegister className="register-style-version">
      <LoginRegisterDecoration />
      <section>
        <RegisterForm />
      </section>
    </StyledRegister>
  );
}
