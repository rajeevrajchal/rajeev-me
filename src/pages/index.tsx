import type { ReactElement } from 'react';
import LandingLayout from 'layouts/LandingLayout';
import SEOHead from '@components/shared/SeoHead';
import Spacer from '@components/shared/Spacer';
import About from '@modules/home/compnents/About';
import Banner from '@modules/home/compnents/Banner';
import WhereWork from '@modules/home/compnents/WhereWork';
import Contact from '@modules/home/compnents/Contact';
import Projects from '@modules/home/compnents/Projects';

const Home = () => (
  <>
    <Banner />
    <Spacer size="xl" />
    <About />
    <Spacer size="xl" />
    <WhereWork />
    <Spacer size="xl" />
    <Projects />
    <Spacer size="xl" />
    <Contact />
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
