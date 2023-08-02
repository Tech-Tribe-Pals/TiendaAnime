import Inicio from "../components/Inicio";
import CarouselSection from "../components/CarouselSection";
import ProductHome from "../components/ProductHome";
import styled from "styled-components";


const HomeStyle = styled.main `
  
  display:flex;
  flex-direction:column;
`

export default function Home() {
  return (
    <HomeStyle>
      <Inicio />
      <CarouselSection />
      <ProductHome />
    </HomeStyle>
  );
}
