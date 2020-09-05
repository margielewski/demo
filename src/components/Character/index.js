import React from "react";
import {
  StyledImage,
  StyledWrapper,
  StyledCardTop,
  StyledTitle
} from "./style";
import ListItem from "./ListItem";

export default function Character(props) {
  const {
    name,
    image,
    gender,
    location,
    origin,
    type,
    species,
    status
  } = props;

  return (
    <StyledWrapper>
      <StyledCardTop>
        <StyledImage>
          <img src={image} alt={name} />
        </StyledImage>
        <StyledTitle>{name ? name : "unknown"}</StyledTitle>
      </StyledCardTop>
      <ul>
        <ListItem title={"Gender"} value={gender ? gender : "unknown"} />
        <ListItem title={"Location"} value={location ? location.name : "unknown"} />
        <ListItem title={"Origin"} value={origin ? origin.name : "unknown"} />
        <ListItem data-testid="input-type" title={"Type"} value={type ? type : "unknown"} />
        <ListItem title={"Species"} value={species ? species : "unknown"} />
        <ListItem title={"Status"} value={status ? status : "unknown"} />
      </ul>
    </StyledWrapper>
  );
}
