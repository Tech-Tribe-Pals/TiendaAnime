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
    padding-right: 8rem;
    background-color: #3c4e90;
    margin-bottom: 100px;
    display: flex;
    flex-direction:column;
    align-items:center;
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
          options={{ height: "600px", width: "80%" }}
          aria-label="My Favorite Images" 
        >
          <SplideSlide >
            <CarouselCard img={"/img1.jpg "} title={"Cosplay y Ropa"} text1={"trajes de exelente calidad"} text2={"variedad de diseños"} text3={"todos los talles"} />
          </SplideSlide>
          <SplideSlide>
            <CarouselCard img={"/img2.jpg "}    title={"Figuras y Coleccionables"}  text1={"Figuras originales importadas"} text2={"Ediciones limitadas"} text3={"Diversas marcas y modelos"} />
          </SplideSlide>
          <SplideSlide>
            <CarouselCard img={"/img2.jpg "}    title={"Cartas y Mangas!"} text1={"Mangas populares"} text2={"Cartas competitivas"} text3={"Ediciones coleccionistas"} />
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
