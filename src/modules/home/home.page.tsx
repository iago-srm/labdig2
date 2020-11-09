import * as React from "react";
import { useHistory } from "react-router-dom";
import { Col, Row, Grid } from "react-flexbox-grid";
import { HomePageButtonStyled, ProjectTitleStyled } from "./home.page.style";
import { PageTitleStyled, PageHeaderStyled } from '../../style/global';

export const HomePage = () => {
 
  const history = useHistory();

  const handleDashboardPage = () => {
    history.push(`/dashboard`);
  };

  return (
    <Grid>
      <PageHeaderStyled center="xs">
          <ProjectTitleStyled>PCS 3645 - LabDig 2</ProjectTitleStyled>
      </PageHeaderStyled>
      <PageHeaderStyled center='xs'>
          <PageTitleStyled>Gerenciamento de estacionamento</PageTitleStyled>
      </PageHeaderStyled>
      <Row center="xs">
        <Col xs={10} sm={8} md={6}>
          <HomePageButtonStyled onClick={handleDashboardPage}>
            Dashboard
          </HomePageButtonStyled>
        </Col>
      </Row>
    </Grid>
  );
};
