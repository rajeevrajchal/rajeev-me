/* eslint-disable import/prefer-default-export */

import { AppRoute } from 'constants/AppRoute';

export type NavLink = {
  label: string;
  type: string;
  link: string;
  title?: string;
};

export const menu: NavLink[] = [
  {
    label: 'Home',
    link: AppRoute.HOME,
    type: 'link',
    title: 'Group of myself, workdone etc.',
  },
  {
    label: 'Blog',
    link: AppRoute.BLOGS,
    type: 'link',
    title: 'Blog list I have wrote and followed',
  },
  {
    label: 'Library',
    link: AppRoute.LIBRARY,
    type: 'link',
    title: 'Library of my plugins, packages, ui component etc.',
  },
];
