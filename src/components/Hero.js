import React from "react";
import styled from "styled-components";
import { Button, Grid } from "semantic-ui-react";
import { navigate } from "@reach/router";

const Hero = (props) => {
  return (
    <StyledHero small={props.small}>
      <img
        className="c-hero__image"
        src="https://images.unsplash.com/photo-1514395629347-41e19e338c6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        alt=""
      />
      <div class="c-hero__overlay"></div>
      <div className="c-hero__inner">
        <Grid centered>
          <Grid.Row centered>
            <Grid.Column>
              <h3 class="c-hero__text">{props.text}</h3>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column textAlign="center">
              {!props.small && (
                <Button
                  basic
                  color="teal"
                  size="large"
                  onClick={() => navigate("/browse")}
                >
                  Explore Tours
                </Button>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </StyledHero>
  );
};

export default Hero;

const StyledHero = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => (props.small ? "70vh" : "100vh")};

  .c-hero__inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .c-hero__text {
    font-size: ${(props) => (props.small ? "4rem" : "7rem")};
    color: white;
    text-align: center;
    text-transform: uppercase;
  }

  .c-hero__image {
    object-fit: cover;
    height: 100%;
    width: 100%;
    filter: brightness(30%);
    position: relative
  }
  .c-hero__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00b5ad;;
    opacity: 0.2;
  }
`;
