import SEOHead from '@components/shared/SeoHead';
import LandingLayout from '@layouts/LandingLayout';
import { ReactElement } from 'react';

const Library = () => <div>Library</div>;

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
