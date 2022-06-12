import SEOHead from '@components/SeoHead';
import BlankLayout from '@layouts/BlankLayout';
import Text from '@components/Text';

import { ReactElement } from 'react';
import Image from 'next/image';

const Maintenance = () => (
  <div className="h-full w-full grid place-content-center bg-slate-50 gap-8">
    <Image
      src="/images/maintenance.svg"
      width="1000"
      height="300"
      alt="Maintenance"
    />
    <div className="flex flex-col gap-4 justify-center items-center">
      <Text
        text="This page is underdevelopment"
        variant="h3"
        customClass="leading-6 text-center text-slate-500"
      />
      <Text
        text="
            Meet Rajeev, a software developer with great experience in building top-notch websites,
            web applications, and mobile apps with excellent communication skills,
            high coding standards, and a strong focus on making the code scalable and conforming to quality standards.
            Currently he is building something different for you
        "
        variant="p"
        customClass="leading-6 text-center text-slate-500 w-3/5 "
      />
    </div>
  </div>
);

Maintenance.getLayout = function getLayout(page: ReactElement) {
  return (
    <BlankLayout>
      <>
        <SEOHead
          title="Thinking"
          description="Rajeev is thinking about new things to show up"
        />
        {page}
      </>
    </BlankLayout>
  );
};
export default Maintenance;
