import { GITHUB, INSTAGRAM, LINKEDIN, TWITTER } from 'constants/SocialLink';
import Link from 'next/link';
import React from 'react';
import { GitHub, Instagram, Linkedin, Twitter } from 'react-feather';

const contactMenu = [
  {
    icon: <Twitter className="text-cyan-300" />,
    link: TWITTER,
  },
  {
    icon: <GitHub className="text-base-500" />,
    link: GITHUB,
  },
  {
    icon: <Linkedin className="text-blue-500" />,
    link: LINKEDIN,
  },
  {
    icon: <Instagram className="text-pink-500" />,
    link: INSTAGRAM,
  },
];
const Footer = () => (
  <div className="flex justify-between flex-wrap-reverse h-[10vh] gap-2 mb-4">
    <div>
      <h1 className="text-xl font-bold">Developed by Rajeev Rajchal</h1>
      <h2 className="text-lg font-bold">Build with Next</h2>
    </div>
    <div className="w-1/4">
      <div className="flex justify-between items-center gap-4 md:gap-0">
        {contactMenu.map((item) => (
          <Link passHref href={item.link}>
            <a href="">{item.icon}</a>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default Footer;
