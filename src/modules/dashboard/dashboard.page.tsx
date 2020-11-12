import * as React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Row, Grid, Col } from "react-flexbox-grid";
import { db } from '../../provider/firebase';
import { Vagas } from './vaga/vaga.component';
import { PageTitleStyled, PageHeaderStyled } from '../../style/global';
import { ConsoleBlynk } from './console/console-blynk.component';

const numVagas = 6;

export const DashboardPage = () => {

  const [value, loading] = useCollection(
    db.collection('vagas')
  );

  const writeVagas = (vagas: string) => {
    console.log(vagas,value?.docs);
    if(vagas.length == numVagas) {
      vagas.split("").forEach((state, index) => {
        let ocupada = false;
        if(parseInt(state)) ocupada = true;
        // value?.docs.forEach((doc: any, index: number) => {

        //   if(Boolean(parseInt(vagas.charAt(index))) != doc.data().ocupada) {
        //     console.log(index+' virou ' + doc.data.ocupada());
        //   }
        // });
        db.collection('vagas').doc(index.toString()).set({ocupada});
      });
    }
  };
  
  return (
    <Grid>
      <PageHeaderStyled middle='xs' between='xs'>
      </PageHeaderStyled>
      <PageHeaderStyled center='xs'>
        <PageTitleStyled>Dashboard</PageTitleStyled>
      </PageHeaderStyled>
      <Vagas numVagas={numVagas} loading={loading} vagas={value?.docs.map((doc: any) => doc.data().ocupada)}/>
      <Row start='xs'>
      <Col xs={12} sm={6}>
        <ConsoleBlynk 
          setVagas={writeVagas}
          vagas={value?.docs.map((doc: any) => doc.data().ocupada)}
          // situation={value?.docs.map((doc: any, index: number) => ({ocupada: doc.data().ocupada, timestamp: times[index]}))}
        />
      </Col>
      </Row>
    </Grid>
  );
}