import React from "react";

import {
  StyledListItem,
  StyledTitle,
  StyledValue,
  StyledDecorator
} from "./style";

export default function ListItem({ title, value }) {
  return (
    <>
      <StyledListItem>
        <StyledTitle>{title}:</StyledTitle>
        <StyledValue>{value}</StyledValue>
        <StyledDecorator></StyledDecorator>
      </StyledListItem>
    </>
  );
}
