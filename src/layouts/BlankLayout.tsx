/* eslint-disable react/no-array-index-key */
import { ReactElement } from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { useColorMode } from '@hooks/UseColorMode';
import Text from '@components/shared/Text';
import { SOCIAL_LINKS, SOCIAL_LINKS_TYPE } from 'constants/SocialLink';
import NextLink from '@components/shared/Link';
import Logo from '@components/Logo';

interface LandingLayoutProps {
  children: ReactElement;
}

const BlankLayout = (props: LandingLayoutProps) => {
  const { children } = props;
  const { colorMode } = useColorMode();
  return (
    <div
      data-theme={colorMode}
      className="h-screen w-screen relative overflow-hidden"
    >
      <div
        className="absolute top-3 left-0 w-full h-14 flex items-center justify-between px-6 py-8 md:px-54 xl:px-64 2xl:px-74 "
        data-theme={colorMode}
      >
        <NextLink href="/" label={<Logo />} />
        <div className="text-slate-500 flex gap-4">
          <FaDiscord size={25} className="cursor-pointer hover:text-blue-300" />
          <BsGithub size={20} className="cursor-pointer hover:text-blue-200" />
          <AiFillLinkedin
            size={20}
            className="cursor-pointer hover:text-blue-300"
          />
        </div>
      </div>
      {children}
      <div
        className=" w-full absolute bottom-0 left-0 h-24 text-center flex flex-col gap-4 justify-center items-center"
        data-theme={colorMode}
      >
        <Text
          text="Build with love - Rajeev Rajchal"
          customClass="capitalize"
        />
        <ul className="flex justify-center items-center gap-8 md:gap-4 ">
          {SOCIAL_LINKS.map((item: SOCIAL_LINKS_TYPE, index: number) => (
            <li key={`${item.label}-${index}`}>
              <NextLink
                href={item.link}
                icon={item.icon}
                customClass="capitalize flex flex-col items-center gap-2"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlankLayout;
