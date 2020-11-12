import * as styled from 'styled-components';

const ocupadaColor = 'red';
const vaziaColor = 'green';
// const loadingColor = 'grey';

interface VagaProps {
  ocupada?: boolean;
  loading: boolean;
}
export const VagaStyled = styled.default.div`
  display: inline-block;
  margin: 3px;
  width: 50px;
  height: 70px;
  background-color: ${(props: VagaProps) => props.loading ? 'inherit' : props.ocupada ? ocupadaColor : vaziaColor};
`;

export const VagasContainerStyled = styled.default.div`
  border: 2px solid black;
`;

export const VagaIDStyled = styled.default.h2`
  background-color: inherit
`;
