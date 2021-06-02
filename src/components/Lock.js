import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 32px;
  justify-self: flex-end;
  align-self: flex-end;
  margin: 40px;

  @media screen and (max-width: 768px) {
    margin: 24px;
  }
`;

const Lock = () => {
  return (
    <Container>
      <svg
        height="32px"
        viewBox="-64 0 512 512"
        width="32px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
        <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
      </svg>
    </Container>
  );
};

export default Lock;
