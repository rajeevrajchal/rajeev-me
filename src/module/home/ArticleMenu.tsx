import Link from 'next/link';
import React from 'react';
import { Aperture, BookOpen, Box, ChevronsRight } from 'react-feather';

import { AppRoute } from 'constants/AppRoute';
import Spacer from '@components/Spacer';

interface ArticleMenuItem {
  id: number;
  icon: React.ReactElement;
  label: string;
  created: string;
}

const ArticleMenu = () => (
  <div className="flex flex-col">
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-extrabold">Latest Article</h1>
      <Link href={AppRoute.ARTICLES} passHref>
        <a className="flex items-center gap-3 hover:underline">
          <span className="text-md font-bold"> All article</span>
          <ChevronsRight />
        </a>
      </Link>
    </div>
    <Spacer />
    <div className="flex flex-col gap-8">
      {[
        {
          icon: <BookOpen className="text-red-300" />,
          id: 1,
          label:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aperiam.',
          created: 'September 08, 2019',
        },
        {
          icon: <Box className="text-green-300" />,
          id: 2,
          label:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aperiam.',
          created: 'September 08, 2019',
        },
        {
          icon: <Aperture className="text-blue-300" />,
          id: 3,
          label:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aperiam consectetur adipisicing elit. Incidunt, aperiam .',
          created: 'September 08, 2019',
        },
      ].map(({ id, icon, label, created }: ArticleMenuItem) => (
        <Link href={`${AppRoute.ARTICLE}/1`} key={id}>
          <div className="flex items-start justify-start gap-4 hover:underline cursor-pointer w-full">
            <div>{icon}</div>
            <div className="flex flex-col items-start -mt-1 w-full lg:max-w-[60%]">
              <h1 className="flex items-center gap-4 text-lg font-bold">
                {label}
              </h1>
              <h5 className="text-[#5E8CA7] text-sm font-bold">{created}</h5>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default ArticleMenu;
