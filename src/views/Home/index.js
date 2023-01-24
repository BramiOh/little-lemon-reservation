import { Container, Divider } from "@mui/material";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import OrderDelivery from "./components/OrderDelivery";

function Home() {
  return (
    <Container>
      <Hero />
      <OrderDelivery />
      <Divider />
      <Menu />
    </Container>
  );
}

export default Home;
