import * as styled from 'styled-components';

export const LineStyled = styled.default.div<{index: number}>`
  background-color: ${props => props.index % 2 == 0 ? '#bbb' : 'inherit'};
  height: 10%;
  width: 100%;
  padding: 5px;
`;

export const ConsoleBoxStyled = styled.default.div`
  margin: 10px;
  height: 30vh;
  border: 2px solid black;
  overflow: auto;
`;

export const LineFillerStyled = styled.default.span<{size?: string}>`
width:${props => props.size || '55%'}; display: inline-block;`;