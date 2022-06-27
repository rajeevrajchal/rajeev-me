/* eslint-disable react/no-array-index-key */
import React from 'react';

import Text from '@components/shared/Text';
import NextLink from '@components/shared/Link';

import { SOCIAL_LINKS, SOCIAL_LINKS_TYPE } from 'constants/SocialLink';

const LandingFooter = () => (
  <div className="flex flex-col gap-2 w-full text-center py-12 relative">
    <Text text="Build with love - Rajeev Rajchal" />
    <ul className="flex justify-center items-center gap-8 ">
      {SOCIAL_LINKS.map((item: SOCIAL_LINKS_TYPE, index: number) => (
        <li key={`${item.label}-${index}`} title={item.label}>
          <NextLink
            external
            href={item.link}
            icon={item.icon}
            customClass="capitalize flex flex-col items-center gap-2"
          />
        </li>
      ))}
    </ul>
  </div>
);

export default LandingFooter;
