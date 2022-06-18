import { ReactElement } from 'react';
import { useColorMode } from '@hooks/UseColorMode';
import Text from '@components/shared/Text';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

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
        className="absolute top-0 left-0 w-full h-14 flex items-center justify-between px-6 py-8 md:px-24"
        data-theme={colorMode}
      >
        <Text text="Rajeev R" variant="h2" customClass="text-slate-500" />
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
        className=" w-full absolute bottom-0 left-0 h-12 text-center flex justify-center items-center"
        data-theme={colorMode}
      >
        Copyright - 2022 - Rajeev Rajchal
      </div>
    </div>
  );
};

export default BlankLayout;
