import * as React from 'react';
import * as axios from 'axios';

import { ConsoleBoxStyled, LineStyled } from './console.style';

const authToken= 'p5O65bgtyF3S9DuC4bl7g0W-0b0xWx1u';
const pin = 'V0';
const interval = 3000;

interface Situation {
  vagas: string;
  timestamp: string;
}

interface ConsoleBlynkProps {
  setVagas: (vagas: string) => void;
  vagas: boolean[];
}


export const ConsoleBlynk = (props: ConsoleBlynkProps) => {
  
  const [history, setHistory] = React.useState<Situation[]>([]);

  React.useEffect(() => {
    props.vagas.forEach((vaga: boolean, index: number) => {

        //   if(Boolean(parseInt(history.charAt(index))) != doc.data().ocupada) {
        //     console.log(index+' virou ' + doc.data.ocupada());
        //   }
        });
  }, [props.vagas]);

  React.useEffect(() => {
    const timerId = setInterval(() => {
    axios.default.get(`http://blynk-cloud.com/${authToken}/get/${pin}`)
      .then(res => {
        const vagas: string = res.data[res.data.length-1];
        setHistory(currentHistory => [...currentHistory, {vagas, timestamp: (new Date()).toLocaleString()}]);
        props.setVagas(vagas);
      }).catch(error => {
        console.log(error);
      });
  }, interval);
    return () => clearInterval(timerId);
  }, []);

  return (
    <ConsoleBoxStyled >
      {history.map((state, index) => <LineStyled index={index} key={index}>{state.vagas} &emsp;&emsp;&emsp;&emsp;&emsp; {state.timestamp}</LineStyled>)}
    </ConsoleBoxStyled>
  );
};