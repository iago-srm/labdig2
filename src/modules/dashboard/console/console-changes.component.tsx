import * as React from 'react';
import { ConsoleBoxStyled, LineStyled, LineFillerStyled } from './console.style';
import { DashboardContext } from '../dashboard.provider';

export const ConsoleChanges = () => {

  const { changes } = React.useContext(DashboardContext);

  return (
    <ConsoleBoxStyled>
      {changes?.map((change, index) => (
        <LineStyled index={index} key={index}>
          vaga {change.vagaId} {change.newOcupada ? 'OCUPOU' : 'VAGOU'} <LineFillerStyled size='40%'/> em {change.timestamp}
        </LineStyled>
      ))}
    </ConsoleBoxStyled>
  )
}