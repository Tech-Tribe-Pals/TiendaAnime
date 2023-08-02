import Inicio from "../components/Inicio";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import ProductHome from "../components/ProductHome";
import styled from "styled-components";
import CarouselCard from "../components/CarouselCard";

const HomeStyle = styled.main`
  display: flex;
  flex-direction: column;
  .carouselBack {
    padding: 20px;
    background-color: #3c4e90;
  }
`;

export default function Home() {
  return (
    <HomeStyle>
      <Inicio />
      <section className="carouselBack">
      <Splide options={{ height: '450px', width: '90%' }} aria-label="My Favorite Images">
        <SplideSlide>
          <CarouselCard img={'/img1.jpg '} />
        </SplideSlide>
        <SplideSlide>
        <CarouselCard img={'/img2.jpg '} />
        </SplideSlide>
      </Splide>
      </section>
      <ProductHome />
    </HomeStyle>
  );
}
