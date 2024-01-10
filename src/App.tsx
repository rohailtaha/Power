import { useCallback } from 'react';
import './App.css';
import useApiPoll from './hooks/useApiPoll';
import { Battery, Grid, Home, Sun } from './icons';

function App() {
  const handleData = useCallback((data: Record<any, any>) => {
    console.log(data);
  }, []);

  useApiPoll(handleData);

  return (
    <>
      <div className='sky'>
        <Sun />
      </div>
      <div className='ground'>
        <Grid />
        <div className='home'>
          <Battery />
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
