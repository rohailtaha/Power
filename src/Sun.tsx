import { Sun as SunIcon } from './icons';
import { roundTo2Decimals } from './utils/utils';

type SunProps = {
  energy: string;
};

function Sun({ energy }: SunProps) {
  const brightness = (parseFloat(energy) / 6) * 100;

  return (
    <div className='sun-section'>
      <h2> {roundTo2Decimals(energy)} </h2>
      <SunIcon brightness={brightness} />
    </div>
  );
}

export default Sun;
