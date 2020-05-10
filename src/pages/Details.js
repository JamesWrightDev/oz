import React, { useState, useEffect } from "react";
import Wrapper from "../styles/Wrapper";
import CommentsContainer from "../components/Comments/CommentsContainer";
import Layout from "../components/Layout";
import StyledDetails from "../styles/StyledDetails";
import Hero from "../components/Hero";
import { fetchTourById } from "../api/triposo";
import { Rating, Loader, Container, Button, Grid } from "semantic-ui-react";

const Details = (props) => {
  const [tour, setTour] = useState(false);
  const [loading, setLoading] = useState(true);
  console.log(tour);
  useEffect(() => {
    setLoading(true);
    fetchTourById(props.tourId).then((data) => {
      setTour(data.results[0]);
      setLoading(false);
    });
  }, [props.tourId]);

  return (
    <Layout>
      <Loader active={loading} size="medium" />
      {!loading && (
        <>
          <Hero text={tour.name} small />
          <Wrapper>
            <Container>
              <StyledDetails>
                <div className="details__rating">
                  <div className="details__item">
                    <h3 class="details__subheader">Rating</h3>
                    <Rating
                      icon="heart"
                      size="massive"
                      disabled
                      maxRating={5}
                      defaultRating={Math.round(tour.score / 2)}
                    />
                  </div>
                  <div className="details__item">
                    <h3 className="details__subheader">Price</h3>
                    <span className="details__price">€ {tour.price.amount}</span>
                  </div>
                </div>

                <Grid>
                  <Grid.Column textAlign="center">
                    <Button
                      basic
                      color="teal"
                      onClick={() => window.open(`${tour.vendor_tour_url}`)}
                    >
                      Find Out More
                    </Button>
                  </Grid.Column>
                </Grid>
                <div class="details__comments">
                  <CommentsContainer
                    className="details__comments"
                    tourId={props.tourId}
                  />
                </div>
              </StyledDetails>
            </Container>
          </Wrapper>
        </>
      )}
    </Layout>
  );
};
export default Details;
