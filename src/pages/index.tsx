import type { ReactElement } from 'react';
import LandingLayout from 'layouts/LandingLayout';
import SEOHead from '@components/shared/SeoHead';
import Spacer from '@components/shared/Spacer';
import About from '@modules/home/compnents/About';
import Banner from '@modules/home/compnents/Banner';
import WhereWork from '@modules/home/compnents/WhereWork';

const Home = () => (
  <>
    <Banner />
    <Spacer size="xl" />
    <About />
    <Spacer size="xl" />
    <WhereWork />
  </>
);

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <LandingLayout>
      <>
        <SEOHead />
        {page}
      </>
    </LandingLayout>
  );
};

export default Home;

// primary: #4e85ff
