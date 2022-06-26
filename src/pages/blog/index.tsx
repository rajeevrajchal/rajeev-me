import { ReactElement } from 'react';

import LandingLayout from '@layouts/LandingLayout';
import SEOHead from '@components/shared/SeoHead';

const Blog = () => <div>Blog</div>;

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
