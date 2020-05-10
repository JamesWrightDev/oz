import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import TourCard from "../components/TourCard";
import fetchTours from "../api/triposo";
import { Loader, Container, Menu, Input } from "semantic-ui-react";
import Wrapper from "../styles/Wrapper";

import { useSelector } from "react-redux";

const Browse = () => {
  const [tours, setTours] = useState(false);
  const [loading, setLoading] = useState(true);
  const [maxPrice, setMaxPrice] = useState(false);
  const [searchTerms, setSearchTerms] = useState([]);
  const [minMax, setMinMax] = useState({ min: 0, max: 99 });
  const [filteredTours, setFilteredTours] = useState(false);

  const username = useSelector((state) => state.auth.username);

  const filterTours = (maxVal) => {
    setMaxPrice(maxVal);
    const filteredTours = tours.filter((item) => {
      return parseFloat(item.price.amount) < maxVal;
    });
    setFilteredTours(filteredTours);
  };

  const filterByTerms = (input) => {
    const filteredTours = tours.filter((item => {
      return item.name.toLowerCase().includes(input.toLowerCase())
    }))
    setFilteredTours(filteredTours);
  }

  const handleSearchEnter = (e, input) => {
    if(e.key === 'Enter'){
      setSearchTerms([...searchTerms, input])
      filterByTerms(input);
    }
  }

  useEffect(() => {
    setLoading(true);
    fetchTours().then((data) => {
      setTours(data.results);
      setFilteredTours(data.results);
      setLoading(false);
      setMinMax({
        min: Math.round(Math.min.apply(
          Math,
          data.results.map((tour) => {
            return tour.price.amount;
          }))
        ),
        max: Math.round(Math.max.apply(
          Math,
          data.results.map((tour) => {
            return tour.price.amount;
          })
        ) + 1),
      });
      setMaxPrice(
        Math.round(Math.max.apply(
          Math,
          data.results.map((tour) => {
            return tour.price.amount;
          })
        ) + 1)
      );
    });
  }, []);

  return (
    <Layout>
      <Wrapper>
        <Container>
          <Menu fixed borderless>
            <Menu.Item>
              <Input
                className="icon"
                icon="search"
                placeholder="Search..."
                onKeyDown={(e) => handleSearchEnter(e, e.target.value)}
                />
            </Menu.Item>
            <Menu.Item position="right">
              {maxPrice && (
                <>
                  <span> Max € {maxPrice}</span>
                  <input
                    type="range"
                    min={minMax.min}
                    max={minMax.max}
                    type="range"
                    step={1}
                    value={maxPrice}
                    onChange={(e) => filterTours(e.target.value)}
                  />
                </>
              )}
            </Menu.Item>
          </Menu>
          <Loader active={loading} size="medium" />
          <span>{filteredTours && `${filteredTours.length} (results)`}</span>
          {username && <h1>Hey {username}!</h1>}
          {filteredTours &&
            !loading &&
            filteredTours.map((tour) => {
              return (
                <TourCard
                  key={tour.id}
                  name={tour.name}
                  price={tour.price.amount}
                  pricePerPerson={tour.price_is_per_person}
                  rating={Math.round(tour.score)}
                  tourId={tour.id}
                  tourData={tour}
                />
              );
            })}
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default Browse;
