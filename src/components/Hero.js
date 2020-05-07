import React from "react";
import styled from "styled-components";

const Hero = (props) => {
  return (
    <StyledHero>
      <img
        className="c-hero__image"
        src="https://images.pexels.com/photos/3686283/pexels-photo-3686283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1920"
        alt=""
      />
      <div className="c-hero__inner">
        <h3 class="c-hero__text">{props.text}</h3>
      </div>
    </StyledHero>
  );
};

export default Hero;

const StyledHero = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  .c-hero__inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

  }
  .c-hero__text {
    font-size: 7rem;
    color: white;
    text-align: center;
    text-transform: uppercase;
  }

  .c-hero__image {
    object-fit: cover;
    height: 100%;
    width: 100%;
    filter: brightness(75%);
    filter: sepia(10%) saturate(90%) brightness(30%) hue-rotate(10deg);
  }
`;
