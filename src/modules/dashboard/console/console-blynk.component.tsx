import * as React from 'react';
import * as axios from 'axios';

import { ConsoleBoxStyled, LineStyled, LineFillerStyled } from './console.style';
import { DashboardContext } from '../dashboard.provider';

const authToken= 'p5O65bgtyF3S9DuC4bl7g0W-0b0xWx1u';
const pin = 'V77';
const interval = 3000;

export const ConsoleBlynk = () => {
  
  const {parseVagasString, snapshots} = React.useContext(DashboardContext);

  React.useEffect(() => {
    const timerId = setInterval(() => {
    axios.default.get(`http://blynk-cloud.com/${authToken}/get/${pin}`)
      .then(res => {
        const ascii: string = res.data[res.data.length-1];
        const decimal = ascii.charCodeAt(0);
       
        const vagas = Number(decimal).toString(2);
        
        parseVagasString(vagas.substr(1));
      }).catch(error => {
        console.log(error);
      });
  }, interval);
    return () => clearInterval(timerId);
  }, []);

  return (
    <ConsoleBoxStyled >
      {snapshots?.map((state, index) => (
        <LineStyled index={index} key={index}>
          {state.vagas} <LineFillerStyled/> {state.timestamp}
        </LineStyled>
      ))}
    </ConsoleBoxStyled>
  );
};