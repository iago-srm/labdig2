import * as React from 'react';
import { Row } from 'react-flexbox-grid';
import { VagasContainerStyled, VagaStyled, VagaIDStyled } from './vaga.style';
import Loader from 'react-loader-spinner'

interface VagasProps {
  vagas?: boolean[];
  loading: boolean;
  numVagas: number;
}

export const Vagas = (props: VagasProps) => {
  return (<VagasContainerStyled>
    <Row between='xs'>
      {Array(props.numVagas).fill(0).map((i,index) => i+index).map(id => {
        return (
          <VagaStyled key={id} ocupada={props.vagas?.[id]} loading={props.loading}>
            {props.loading ? <Loader type="ThreeDots" color="grey" height={40} width={40}/> : <VagaIDStyled>{id}</VagaIDStyled>}
          </VagaStyled>
        )
      })}
    </Row>
  </VagasContainerStyled>
  );
}
