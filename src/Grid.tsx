import { Grid as GridIcon, HorizontalArrow } from './icons';
import { roundTo2Decimals } from './utils/utils';

type GridProps = {
  power: string;
};

function Grid({ power: power }: GridProps) {
  return (
    <section className='home-section'>
      <h2> {roundTo2Decimals(power)} </h2>
      <div className='flex-c'>
        <GridIcon />
        <HorizontalArrow
          direction={
            parseFloat(roundTo2Decimals(power)) <= 0 ? 'left' : 'right'
          }
        />
      </div>
    </section>
  );
}

export default Grid;
