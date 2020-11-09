import styled from "styled-components";

export const ProjectTitleStyled = styled.h1`
  font-family: "Arial";
  font-size: 36px;
  text-align: left;
`;

export const HomePageButtonStyled = styled.div`
  width: 90%;
  font-size: 24px;
  padding: 15px;
  border: 10px rgb(110,255,110) dashed;
  cursor: pointer;
  font-family: "Arial", sans-serif;
  transition: all 400ms ease;
  &:hover {
    transform: scale(1.1);
  }
`;
