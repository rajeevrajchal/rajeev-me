import SEOHead from '@components/shared/SeoHead';
import ComingSoon from '@components/views/ComingSoon';
import LandingLayout from '@layouts/LandingLayout';
import { ReactElement } from 'react';

const Library = () => <ComingSoon />;

Library.getLayout = function getLayout(page: ReactElement) {
  return (
    <LandingLayout>
      <>
        <SEOHead title="All Projects" description="List of projects done." />
        {page}
      </>
    </LandingLayout>
  );
};
export default Library;
