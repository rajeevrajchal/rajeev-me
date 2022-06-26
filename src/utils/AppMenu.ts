/* eslint-disable import/prefer-default-export */

import { AppRoute } from 'constants/AppRoute';

export type NavLink = {
  label: string;
  type: string;
  link: string;
};

export const menu: NavLink[] = [
  {
    label: 'Home',
    link: AppRoute.HOME,
    type: 'link',
  },
  {
    label: 'Blog',
    link: AppRoute.BLOGS,
    type: 'link',
  },
  {
    label: 'Library',
    link: AppRoute.LIBRARY,
    type: 'link',
  },
];
