import SEOHead from '@components/shared/SeoHead';
import LandingLayout from '@layouts/LandingLayout';
import LibraryCard from '@modules/library/LibraryCard';

import { ReactElement } from 'react';

const libries = [
  {
    title: 'Tailwind',
    logo: 'https://miro.medium.com/max/800/1*mUISLg4ghf6QYT_f1-cnlg.png',
    metaDesc: `A utility-first CSS framework packed with classes like flex, pt-4,
            text-center and rotate-90 that can be composed to build any design,
            directly in your markup.`,
  },
  {
    title: 'Daisy UI',
    logo: 'https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo-4.svg',
    metaDesc:
      'The most popular, free and open-source Tailwind CSS component library',
  },
  {
    title: 'MUI / Material UI',
    logo: 'https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png',
    metaDesc:
      'MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.',
  },

  {
    title: 'Chakra UI',
    logo: 'https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logo-colored@2x.png?raw=true',
    metaDesc:
      'Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.',
  },
  {
    title: 'Native Base',
    logo: 'https://nativebase.io/img/nativebase-logo-light.svg',
    metaDesc:
      'NativeBase is an accessible, utility-first component library that helps you build consistent UI across Android, iOS and Web.',
  },
  {
    title: 'MUI / Material UI',
    logo: 'https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png',
    metaDesc:
      'MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.',
  },
];
const Library = () => (
  <div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
      {libries.map((item) => (
        <div key={item.title}>
          <LibraryCard item={item} />
        </div>
      ))}
    </div>
  </div>
);

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
