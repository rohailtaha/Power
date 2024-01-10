import './App.css';
import { Battery, Grid, Home, Sun } from './icons';

function App() {
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
