import { useState, useEffect } from 'react';

import AppBar from '../componets/AppBar';
import PaletteList from '../componets/PaletteList';
import { FluidContainer } from './App.styled';
import { IPalette, Status } from '../types';
import { getAllPalettes } from '../services';
import Container from '../componets/Container';
import Spinner from '../componets/Spinner';
import ErrorMessage from '../componets/ErrorMessage';

function App() {
  const [paletteList, setPaletteList] = useState<IPalette[] | null>(null);
  const [status, setStatus] = useState<Status>(Status.IDLE);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setStatus(Status.PENDING);
    getAllPalettes()
      .then(paletteList => {
        setPaletteList(paletteList);
        setStatus(Status.FULFILLED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, []);

  return (
    <FluidContainer>
      <AppBar />
      <Container>
        {status === Status.PENDING && <Spinner size={36} />}
        {status === Status.FULFILLED && paletteList && <PaletteList paletteList={paletteList} />}
        {status === Status.REJECTED && <ErrorMessage text={error} />}
      </Container>
    </FluidContainer>
  );
}

export default App;
