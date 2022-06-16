import { useColorMode } from '@hooks/UseColorMode';
import { ReactElement } from 'react';

interface ContainerProps {
  children: ReactElement;
}
const Container = (props: ContainerProps) => {
  const { children } = props;
  const { colorMode } = useColorMode();

  return (
    <div
      className="px-6 py-8 md:px-24 xl:px-34 2xl:px-44 h-screen w-screen"
      data-theme={colorMode}
    >
      {children}
    </div>
  );
};

export default Container;
