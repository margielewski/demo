import React, { useState } from "react";

import { usePaginatedQuery } from "react-query";

import Character from "../../components/Character";

import {
  StyledSectionWrapper,
  StyledCharactersWrapper,
  StyledActionsWrapper,
  StyledButton,
  StyledCounter
} from "./style";

import { fetchCharacters } from "../../fetch/characters";

export default function Characters() {
  const [page, setPage] = useState(1);

  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["characters", page],
    fetchCharacters
  );

  const prevPage = () => {
    setPage((old) => setPage((old) => Math.max(old - 1, 1)));
  };

  const nextPage = () => {
    setPage((old) => (!latestData || !latestData.info.next ? old : old + 1));
  };

  return (
    <StyledSectionWrapper>
      {status === "success" ? (
        <>
          <StyledActionsWrapper>
            <StyledButton onClick={prevPage} disabled={page === 1}>
              {"<"}
            </StyledButton>
            <StyledCounter>{page}</StyledCounter>
            <StyledButton
              onClick={nextPage}
              disabled={!latestData || !latestData.info.next}
            >
              {">"}
            </StyledButton>
          </StyledActionsWrapper>
          <StyledCharactersWrapper>
            {resolvedData.results.map((c) => (
              <Character key={c.id} {...c} />
            ))}
          </StyledCharactersWrapper>
        </>
      ) : null}
    </StyledSectionWrapper>
  );
}
