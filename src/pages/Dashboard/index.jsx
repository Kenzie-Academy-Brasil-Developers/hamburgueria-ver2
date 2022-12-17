import { Header } from "../../components/Header";
import { ProductFeed } from "../../components/ProductFeed";
import { StyledDashboard } from "./styles";
import { CartModal } from "../../components/CartModal";


export function Dashboard() {
  return (
    <StyledDashboard>
      <Header />
      <main>
        <ProductFeed />
        <CartModal />
      </main>
    </StyledDashboard>
  );
}
