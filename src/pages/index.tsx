import type { ReactElement } from 'react';
import LandingLayout from 'layouts/LandingLayout';
import SEOHead from '@components/SeoHead';

const Home = () => (
  <div>
    <p>the home page</p>
  </div>
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
