import Inicio from "../components/Inicio";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ProdHome from "../components/ProdHome";
import styled from "styled-components";
import CarouselCard from "../components/CarouselCard";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Scroll from "../components/Scroll";
import  OffertHome from "../components/OffertHome"
const HomeStyle = styled.main`
  display: flex;
  flex-direction: column;
  .carouselBack {
    height:100vh;
    width:100%;
    padding: 20px;
    background-color: #3c4e90;
    margin-bottom: 100px;
    display: flex;
   padding-left:2rem;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
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
            <CarouselCard img={"/img1.jpg "} title={"Cosplay y Ropa"} />
          </SplideSlide>
          <SplideSlide>
            <CarouselCard img={"/img2.jpg "}    title={"Figuras y Coleccionables"} />
          </SplideSlide>
          <SplideSlide>
            <CarouselCard img={"/img2.jpg "}    title={"Cartas y Mangas!"} />
          </SplideSlide>
        </Splide>
      </section>
      <OffertHome />
      <ProdHome />
      <Contact />
      <Footer />
    </HomeStyle>
  );
}
