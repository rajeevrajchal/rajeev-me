import SEOHead from '@components/shared/SeoHead';
import Text from '@components/shared/Text';
import { useColorMode } from '@hooks/UseColorMode';

import BlankLayout from '@layouts/BlankLayout';

import Image from 'next/image';

const Maintenance = () => {
  const { colorMode } = useColorMode();
  return (
    <BlankLayout>
      <>
        <SEOHead
          title="Thinking"
          description="Rajeev is thinking about new things to show up"
        />
        <div
          className="h-full w-full grid place-content-center  gap-8"
          data-theme={colorMode}
        >
          <Image
            src="/images/maintenance.svg"
            width="1000"
            height="300"
            alt="Maintenance"
          />
          <div className="flex flex-col gap-4 justify-center items-center">
            <Text
              text="This page is on development"
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
              customClass="leading-6 text-justify text-slate-500 w-4/5 md:w-2/5 "
            />
          </div>
        </div>
      </>
    </BlankLayout>
  );
};
export default Maintenance;
