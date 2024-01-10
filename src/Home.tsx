import { Home as HomeIcon } from './icons';
import { roundTo2Decimals } from './utils/utils';

type HomeProps = {
  power: string;
};

function Home({ power: power }: HomeProps) {
  const powerIntensityPercentage = (parseFloat(power) / 9) * 100;

  return (
    <section className='home-section'>
      <h2> {roundTo2Decimals(power)} </h2>
      <HomeIcon powerIntensity={powerIntensityPercentage} />
    </section>
  );
}

export default Home;
