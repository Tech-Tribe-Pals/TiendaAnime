import React from 'react'
import styled from 'styled-components'


const OfetaStyle = styled.section `
height: 100vh;
width: 100%;
position: relative;
margin-top: 14rem;
background-color: red;
    img {
        width: 100%;
        position:absolute;
        top: -33%;
        left: 0;



    }


    


`

export default function Ofertas() {
  return (
    <OfetaStyle>Ofertas


    <img src="Vertor-White-Ofertas.png" alt="" />

    <div>F</div>
    <div>b</div>

    </OfetaStyle>
  )
}
