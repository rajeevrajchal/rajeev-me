import { ReactElement } from 'react';

import LandingLayout from '@layouts/LandingLayout';

import SEOHead from '@components/shared/SeoHead';
import ComingSoon from '@components/views/ComingSoon';

const Blog = () => <ComingSoon />;

Blog.getLayout = function getLayout(page: ReactElement) {
  return (
    <LandingLayout>
      <>
        <SEOHead title="All Projects" description="List of projects done." />
        {page}
      </>
    </LandingLayout>
  );
};

export default Blog;
