import * as React from 'react';
import { db } from '../../provider/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

interface Snapshot {
  vagas: string;
  timestamp: string;
}

interface Change {
  vagaId: number;
  newOcupada: boolean;
  timestamp: string;
}

interface DashboardContextState {
  snapshots?: Snapshot[];
  changes?: Change[];
  vagas?: boolean[];
  loading: boolean;
  parseVagasString: (vagas: string) => void;
}

export const DashboardContext = React.createContext<DashboardContextState>({loading: false, parseVagasString: () => {}});

export const numVagas = 6;

export const DashboardProvider: React.FC<{}> = (props) => {

  const [snapshots, setSnapshots] = React.useState<Snapshot[]>([]);
  const [vagas, setVagas] = React.useState<boolean[]>([]);
  const [changes, setChanges] = React.useState<Change[]>([]);
  const [vagasString, setVagasString] = React.useState<string>();

  const [value, loading] = useCollection(
    db.collection('vagas')
  );

  React.useEffect(()=>{
    if(value) {
      setVagas(value?.docs.map((doc: any) => doc.data().ocupada));
    }
  },[value]);

  React.useEffect(() => {
    if(vagas && vagasString){
      const now = (new Date()).toLocaleString();
      vagasString.split('').forEach((vaga, index) => {
        let ocupada = false;
        if(parseInt(vaga)) ocupada = true;
        if((vagas[index] && !ocupada) || (!vagas[index] && ocupada)) {
          setChanges(oldChanges => [...oldChanges, {vagaId: index, newOcupada: ocupada, timestamp: now}]);
        }
      });
    }
        
  }, [vagasString, vagas]);

  const parseVagasString = (vagasString: string) => {
    if(vagasString.length == numVagas) {
      const now = (new Date()).toLocaleString();
      vagasString.split("").forEach((vaga,index) => {
        let ocupada = false;
        if(parseInt(vaga)) ocupada = true;
        setVagasString(vagasString);
        db.collection('vagas').doc(index.toString()).set({ocupada});
      });
      setSnapshots(snapshot => [...snapshot, {vagas: vagasString, timestamp: now}]);
    }
  };

  return (
    <DashboardContext.Provider value={{ snapshots, vagas, loading, parseVagasString, changes }}>
      {props.children}
    </DashboardContext.Provider>
  );
};