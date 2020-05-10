import React from "react";
import { Item } from "semantic-ui-react";
import { navigate } from "@reach/router";

const TourCard = (props) => {
  const { name, price, pricePerPerson, tourId } = props;
  return(
    <Item.Group>
      <Item as="a" onClick={() => navigate(`/browse/${tourId}`, {state: {tour: props.tourData}}) }>
      <Item.Image size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' />
      <Item.Content>
        <Item.Header>{name}</Item.Header>
        <Item.Meta>€{price}</Item.Meta>
        {
          pricePerPerson && <Item.Meta>Per Person</Item.Meta>
        }
        <Item.Description>
        </Item.Description>
      </Item.Content>
    </Item>
    </Item.Group>
  )
}

export default TourCard;
