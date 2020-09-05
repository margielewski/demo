import styled from "styled-components";

export const StyledImage = styled.figure`
  width: 5rem;
  margin: 1rem;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const StyledWrapper = styled.div`
  margin: 1rem;
  padding: 1rem 0;
  background: #17213f;
  width: 100%;
  border-bottom: 1px solid lightgray;
  max-width: 400px;
`;

export const StyledCardTop = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTitle = styled.div`
  font-weight: 600;
  font-size: 1.3rem;
`;
