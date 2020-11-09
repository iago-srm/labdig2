import * as styled from "styled-components";
import { Row } from 'react-flexbox-grid';

export const GlobalStyle = styled.createGlobalStyle`
  * {
    background-color: #eee;
  }
`;

export const PageTitleStyled = styled.default.h1``;

export const PageHeaderStyled = styled.default(Row)`
  height: 20vh;
`;
