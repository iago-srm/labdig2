import * as styled from 'styled-components';

export const VagasContainerStyled = styled.default.div`
  border: 2px solid black;
`;

export const ReturnButtonStyled = styled.default.span`
  font-size: 18px;
  border: 10px rgb(110,255,110) dashed;
  box-sizing: border-box;
  height: 50%;
  cursor: pointer;
  transition: all 400ms ease;
  &:hover {
    transform: scale(1.1);
  }
`;

