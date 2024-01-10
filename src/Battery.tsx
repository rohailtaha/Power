import { Battery as BatteryIcon, VerticalArrow } from './icons';
import { roundTo2Decimals } from './utils/utils';

type BatteryProps = {
  battery: string;
  batteryPercentage: string;
};

function Battery({ battery, batteryPercentage }: BatteryProps) {
  return (
    <section className='home-section'>
      <h2> {roundTo2Decimals(battery)} </h2>
      <div className='flex-c'>
        <VerticalArrow
          direction={parseFloat(roundTo2Decimals(battery)) <= 0 ? 'up' : 'down'}
        />
        <BatteryIcon batteryPercentage={parseFloat(batteryPercentage)} />
      </div>
    </section>
  );
}

export default Battery;
