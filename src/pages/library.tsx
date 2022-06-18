import SEOHead from '@components/shared/SeoHead';
import LandingLayout from '@layouts/LandingLayout';
import { ReactElement } from 'react';

const Library = () => <div>Library</div>;

Library.getLayout = function getLayout(page: ReactElement) {
  return (
    <LandingLayout>
      <>
        <SEOHead title="All Library" description="List of library used." />
        {page}
      </>
    </LandingLayout>
  );
};

export default Library;
