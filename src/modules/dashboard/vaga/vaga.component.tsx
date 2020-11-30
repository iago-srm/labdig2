import * as React from 'react';
import { VagasContainerStyled, VagaStyled, VagaIDStyled } from './vaga.style';
import Loader from 'react-loader-spinner'
import { DashboardContext, numVagas } from '../dashboard.provider';
import { Col } from "react-flexbox-grid";

export const Vagas = () => {

  const {vagas, loading} = React.useContext(DashboardContext);

  return (
    <VagasContainerStyled center='xs'>
      {Array(numVagas).fill(0).map((i,index) => i+index).map(id => {
        return (
          <Col>
          <VagaStyled key={id} ocupada={vagas?.[id]} loading={loading} >
            {loading ? 
              <Loader type="ThreeDots" color="grey" height={40} width={40}/> : 
              <VagaIDStyled>{id}</VagaIDStyled>}
          </VagaStyled>
          </Col>
        )
      })}
    </VagasContainerStyled>
  );
}
