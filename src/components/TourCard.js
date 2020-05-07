import React from "react";
import { Item } from "semantic-ui-react";

const TourCard = (props) => {
  const {name, price, score, pricePerPerson } = props;
  return(
    <Item.Group>
      <Item as="a">
      <Item.Image size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' />
      <Item.Content>
        <Item.Header>{name}</Item.Header>
        <Item.Meta>£ {price}</Item.Meta>
        {
          pricePerPerson && <Item.Meta>Per Person</Item.Meta>
        }
        <Item.Description>
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>
    </Item.Group>
  )
}

export default TourCard;
