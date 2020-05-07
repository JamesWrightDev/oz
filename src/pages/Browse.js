import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import TourCard from "../components/TourCard";
import fetchTours from "../api/triposo";
import { Loader, Container } from "semantic-ui-react";

const Browse = () => {
  const [tours, setTours] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTours().then((data) => {
      setTours(data.results);
      setLoading(false);
    });
  }, []);

  return (
    <Layout>
      <Container>
      <Loader active={loading} size="medium" />
      {tours &&
        tours.map((tour) => {
          console.log(tour);
          return (
            <TourCard
              key={tour.id}
              name={tour.name}
              price={tour.price.amount}
              pricePerPerson={tour.price_is_per_person}
              rating={Math.round(tour.score)}
            />
          );
        })}
      </Container>
    </Layout>
  );
};

export default Browse;
