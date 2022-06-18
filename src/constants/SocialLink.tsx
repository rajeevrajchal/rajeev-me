import React from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { SiUpwork } from 'react-icons/si';

export const GITHUB = 'https://github.com/rajeevrajchal';
export const LINKEDIN = 'https://www.linkedin.com/in/rajeevrajchal';
export const INSTAGRAM = 'https://www.instagram.com/rajeevrajchal';
export const TWITTER = 'https://twitter.com/rajeevrajchal';
export const UPWORK = 'https://www.upwork.com/freelancers/~01f0978587bed2e79c';
export const NLV = 'http://nextlevelvalue.nl';
export const TT = 'https://www.trainingtube.com';

export type SOCIAL_LINKS_TYPE = {
  label: string;
  icon: React.ReactNode;
  link: string;
};

export const SOCIAL_LINKS: SOCIAL_LINKS_TYPE[] = [
  {
    label: 'Github',
    icon: <AiFillGithub size={22} />,
    link: GITHUB,
  },
  {
    label: 'Twitter',
    icon: <AiFillLinkedin size={22} />,
    link: TWITTER,
  },
  {
    label: 'LinkedIn',
    icon: <AiFillTwitterCircle size={22} />,
    link: LINKEDIN,
  },
  {
    label: 'Instagram',
    icon: <AiFillInstagram size={22} />,
    link: INSTAGRAM,
  },
  {
    label: 'Upwork',
    icon: <SiUpwork size={22} />,
    link: UPWORK,
  },
];
