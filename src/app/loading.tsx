import { Loader } from "@mantine/core";

const Loading = () => {
  return (
    <div className="w-screen h-screen grid place-content-center">
      <Loader color="indigo" size={50} />
    </div>
  );
};

export default Loading;
