import { ReactElement } from 'react';

import BlankLayout from '@layouts/BlankLayout';

import NextLink from '@components/shared/Link';
import SEOHead from '@components/shared/SeoHead';
import Text from '@components/shared/Text';

const Custom404 = () => (
  <div className="h-full w-full grid place-content-center items-center gap-8">
    <p className="font-blak text-[100px] text-center">404</p>
    <div className="flex flex-col gap-4">
      <Text
        text="Ohh, dear you have been lost"
        variant="h3"
        customClass="text-center"
      />
      <Text
        text="Let's get back to home"
        variant="h4"
        customClass="text-center"
      />
    </div>
    <NextLink href="/" label="Home" customClass="btn btn-info" />
  </div>
);

Custom404.getLayout = function getLayout(page: ReactElement) {
  return (
    <BlankLayout>
      <>
        <SEOHead title="Not Found" description="Page Not Found" />
        {page}
      </>
    </BlankLayout>
  );
};

export default Custom404;
