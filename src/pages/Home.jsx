import Inicio from "../components/Inicio";
import Ofertas from "../components/Ofertas";
import styled from "styled-components";
import CarouselOne from "../components/CarouselOne";
import Contacto from "../components/Contacto";

const PageInicio = styled.main`
  background-color: #3c4e90;
`;

export default function Home() {
  return (
    <PageInicio>
      <Inicio />
      <CarouselOne />
      <Ofertas />
      <Contacto />
    </PageInicio>
  );
}
