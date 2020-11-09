import * as React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../../provider/firebase';
import { useHistory } from "react-router-dom";
import Loader from 'react-loader-spinner'

import { VagaStyled, VagaIDStyled } from './vaga.component';
import { VagasContainerStyled, ReturnButtonStyled } from './dashboard.style';
import { PageTitleStyled, PageHeaderStyled } from '../../style/global';
import { Row, Grid, Col } from "react-flexbox-grid";

const numVagas = 8;

export const DashboardPage = () => {
  const history = useHistory();

  const [value, loading] = useCollection(
    db.collection('vagas')
    // {
    //   snapshotListenOptions: { includeMetadataChanges: true },
    // }
  );

  const handleReturnButton = () => {
    history.push(`/`);
  };

  // React.useEffect(() => {
  //   if(value) {
  //     value.docs.forEach((doc: any) => console.log(doc.data()));
  //   } 
  // }, [value]);
  return (
    <Grid>
      <PageHeaderStyled middle='xs' between='xs'>
        <ReturnButtonStyled onClick={handleReturnButton}>Home</ReturnButtonStyled>
      </PageHeaderStyled>
      <PageHeaderStyled center='xs'>
        <PageTitleStyled>Dashboard</PageTitleStyled>
      </PageHeaderStyled>
      <VagasContainerStyled>
        <Row between='xs'>
          {Array(6).fill(0).map((i,index) => i+index).map(id => {
            return (
              <VagaStyled key={id} ocupada={value?.docs[id].data().ocupada} loading={loading}>
                {loading ? <Loader type="ThreeDots" color="grey" height={40} width={40}/> : <VagaIDStyled>{id}</VagaIDStyled>}
              </VagaStyled>
            )
          })}
        </Row>
      </VagasContainerStyled>
    </Grid>
  );
}