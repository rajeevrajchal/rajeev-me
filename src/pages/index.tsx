import type { ReactElement } from 'react';
import LandingLayout from 'layouts/LandingLayout';
import SEOHead from '@components/shared/SeoHead';
import Spacer from '@components/shared/Spacer';
import About from 'modules/home/About';
import Banner from 'modules/home/Banner';
import WhereWork from 'modules/home/WhereWork';

const Home = () => (
  <>
    <Spacer />
    <Banner />
    <Spacer />
    <About />
    <Spacer />
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
