import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const ScrollStyle = styled.div`
  width: 50px;
  height: 250px;
  background-color: #fff;
  overflow: hidden;
  position: fixed;
  top: 40vh;
  z-index: 10;
  right: 20px;
  border: solid 2px #2f3c6d;
  border-radius: 15px;
  align-items: center;
  box-shadow: 4px 3px 0px 0px #af1313;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    height: 33%;
    cursor: pointer;
  }

  @media (max-width: 576px) {


    display:none;

  }




`;

const Scroll = () => {
  const [startIndex, setStartIndex] = useState(0);

  const sections = ['carousel', 'news', 'contact']

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0
    };

    console.log(startIndex);

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetIndex = sections.indexOf(entry.target.id);
          if (targetIndex !== -1) {
            setStartIndex(targetIndex);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    sections.forEach((section) => {
      const target = document.getElementById(section);
      if (target) {
        observer.observe(target);
      }
    });

    return () => {
      sections.forEach((section) => {
        const target = document.getElementById(section);
        if (target) {
          observer.unobserve(target);
        }
      });
    };
  }, []);

  const handleClick = (section) => {
    const carousel = document.getElementById(section);
    if (carousel) {
      const yOffset = 150;
      const y = carousel.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <ScrollStyle>
      { sections.map((e, i) => (
        <p key={i} style={startIndex === i + 1 ? { color: '#AF1313', scale: '1.3' } : { color: '#55649E' }} onClick={() => handleClick(e)}>{ i + 1 }</p>
      )) }
    </ScrollStyle>
  );
};

export default Scroll;
