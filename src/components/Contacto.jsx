import React from "react";
import styled from "styled-components";

const ContactoContainer = styled.section`
  background-color: green;
  height: 100vh;
  width: 100%;
    display:flex;
    flex-direction:
  img {
    height: 95%;
    width: 95;
    object-fit: cover;
  }


  article {

    width:50%;
    background-color:yellowgreen;
    height:100%;

  }


`;

export default function Contacto() {
  return (
    <ContactoContainer>
      <img src="./luffy.png" alt="" />

      <article>
        <h2>Seguinos en nuestras redes!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
        </p>

        <div>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
      </article>
    </ContactoContainer>
  );
}
