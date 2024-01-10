import { useCallback, useState } from 'react';
import './App.css';
import Battery from './Battery';
import Grid from './Grid';
import Home from './Home';
import Sun from './Sun';
import useApiPoll from './hooks/useApiPoll';
import { EnergyData } from './types';

const defaultEnergyValues = {
  time: '0',
  time_short: '0',
  batt_perc: '0',
  batt: '0',
  solar: '0',
  home: '0',
  grid: '0',
  surplus: '0',
  powerwall_connection_status: '0',
};

function App() {
  const [data, setData] = useState<EnergyData>(defaultEnergyValues);

  const handleData = useCallback((data: EnergyData) => {
    setData(data);
  }, []);

  useApiPoll(handleData);

  return (
    <>
      <div className='sky'>
        <Sun energy={data.solar} />
      </div>
      <div className='ground'>
        <Grid power={data.grid} />
        <div className='home-neighbourhood'>
          <Battery battery={data.batt} batteryPercentage={data.batt_perc} />
          <Home power={data.home} />
        </div>
      </div>
    </>
  );
}

export default App;
