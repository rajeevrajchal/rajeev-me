/* eslint-disable import/prefer-default-export */

import { AppRoute } from 'constants/AppRoute';

type NavLink = {
  label: string;
  type: string;
  link: string;
};

export const menu: NavLink[] = [
  {
    label: 'Articles',
    link: AppRoute.ARTICLES,
    type: 'link',
  },
  {
    label: 'About',
    link: AppRoute.ABOUT,
    type: 'link',
  },
  {
    label: 'Works',
    link: AppRoute.PROJECT,
    type: 'link',
  },
  {
    label: 'Contact',
    link: AppRoute.CONTACT,
    type: 'button',
  },
];
