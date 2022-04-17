/* eslint-disable react/no-unescaped-entities */
import Spacer from '@components/Spacer';
import React from 'react';
import Link from 'next/link';

import {
  TWITTER,
  LINKEDIN,
  GITHUB,
  INSTAGRAM,
} from '@constants/SocialLinks.json';

const Hero = () => (
  <>
    <h1 className="font-bold text-4xl leading-16 tracking-widest break-words whitespace-normal text-left lg:w-2/4">
      I’m Rajeev, software developer and learner.
    </h1>
    <Spacer size="md" />
    <div>
      <p className="text-lg lg:w-3/4 whitespace-normal text-left">
        I'm specialize in rapidly prototyping software companies and web
        applications. I talk about my journey on
        <Link href={TWITTER} passHref>
          <a className="ml-2 text-b text-cyan-500 underline" target="_blank">
            Twitter
          </a>
        </Link>
        ,
        <Link href={LINKEDIN} passHref>
          <a className="ml-2 mr-2 text-blue-500 underline " target="_blank">
            LinkedIn
          </a>
        </Link>
        commit code to
        <Link href={GITHUB} passHref>
          <a className="ml-2 text-base-500 underline" target="_blank">
            Github
          </a>
        </Link>
        , and take shots some
        <Link href={INSTAGRAM} passHref>
          <a className="ml-2 text-pink-500 underline" target="_blank">
            Instagrams
          </a>
        </Link>
        .
      </p>
    </div>
  </>
);

export default Hero;
