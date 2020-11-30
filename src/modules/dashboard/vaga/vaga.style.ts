import * as styled from 'styled-components';
import { Row } from "react-flexbox-grid";

const ocupadaColor = 'red';
const vaziaColor = 'green';

interface VagaProps {
  ocupada?: boolean;
  loading: boolean;
}
export const VagaStyled = styled.default.div`
  display: inline-block;
  margin: 2px 20px;
  width: 50px;
  height: 70px;
  background-color: ${(props: VagaProps) => props.loading ? 'inherit' : props.ocupada ? ocupadaColor : vaziaColor};
`;

export const VagasContainerStyled = styled.default(Row)`
  border: 2px solid black;
`;

export const VagaIDStyled = styled.default.h2`
  background-color: inherit
`;
