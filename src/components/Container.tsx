import { ReactElement } from 'react';

interface ContainerProps {
  children: ReactElement;
}
const Container = (props: ContainerProps) => {
  const { children } = props;
  return (
    <div className="container mx-auto px-8 md:px-24 xl:px-44 2xl:px-64 h-screen w-full">
      {children}
    </div>
  );
};

export default Container;
