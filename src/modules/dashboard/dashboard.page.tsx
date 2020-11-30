import * as React from 'react';
import { Row, Grid, Col } from "react-flexbox-grid";
import { Vagas } from './vaga/vaga.component';
import { PageTitleStyled, PageHeaderStyled } from '../../style/global';
import { ConsoleBlynk } from './console/console-blynk.component';
import { ConsoleChanges } from './console/console-changes.component';
import { DashboardProvider } from './dashboard.provider';

export const DashboardPage = () => {
  
  return (
    <Grid>
      <PageHeaderStyled center='xs'>
        <PageTitleStyled>Dashboard</PageTitleStyled>
      </PageHeaderStyled>

      <DashboardProvider>
        <Row between='xs'>
          <Col xs={12}>
            <h2>O estacionamento</h2>
            <Vagas />
          </Col>
        </Row>
        <Row start='xs'>
          <Col xs={12} sm={6}>
            <h4>Leituras</h4>
            <ConsoleBlynk />
          </Col>
          <Col xs={12} sm={6}>
            <h4>Mudanças</h4>
            <ConsoleChanges />
          </Col>
        </Row>
        
      </DashboardProvider>
    </Grid>
  );
}