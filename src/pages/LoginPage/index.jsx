import { LoginForm } from "../../components/LoginForm";
import { LoginRegisterDecoration } from "../../components/LoginRegisterDecoration";
import { StyledLogin } from "./styles";

export function LoginPage() {
  return (
    <StyledLogin>
      <LoginRegisterDecoration />
      <section>
        <LoginForm />
      </section>
    </StyledLogin>
  );
}
