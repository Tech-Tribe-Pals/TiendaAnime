import Inicio from "../components/Inicio";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ProductHome from "../components/ProductHome";
import styled from "styled-components";
import CarouselCard from "../components/CarouselCard";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Scroll from "../components/Scroll";

const HomeStyle = styled.main`
  display: flex;
  flex-direction: column;
  .carouselBack {
    padding: 20px;
    background-color: #3c4e90;
    margin-bottom: 100px;
    display: flex;
  }
`;

export default function Home() {
  return (
    <HomeStyle>
      <Scroll />
      <Inicio />
      <section className="carouselBack" id="carousel">
        <Splide
          options={{ height: "450px", width: "90%" }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <CarouselCard img={"/img1.jpg "} />
          </SplideSlide>
          <SplideSlide>
            <CarouselCard img={"/img2.jpg "} />
          </SplideSlide>
        </Splide>
      </section>
      <ProductHome />
      <Contact />
      <Footer />
    </HomeStyle>
  );
}
