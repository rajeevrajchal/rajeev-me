import SEOHead from '@components/SeoHead';
import LandingLayout from 'layouts/LandingLayout';
import type { ReactElement } from 'react';

const About = () => (
  <div>
    <p>hello About page or rajeevme</p>
  </div>
);

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <LandingLayout>
      <>
        <SEOHead />
        {page}
      </>
    </LandingLayout>
  );
};

export default About;
