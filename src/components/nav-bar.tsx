import AppRoute from "@/constant/route";
import { Button, Center, Flex, NavLink, Text } from "@mantine/core";
import { usePathname } from "next/navigation";
import { FaBloggerB, FaHome } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";
import { IoLibraryOutline } from "react-icons/io5";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <Flex py="xs" align="center" justify="space-between">
      {/* <Avatar src="./rajeev.jpg" alt="it's me" /> */}
      <Text fw="bold" size="lg">
        Rajeev Rajchal
      </Text>
      <Center>
        <Flex gap="lg">
          {[
            {
              key: "",
              label: "home",
              icon: <FaHome />,
              url: AppRoute.home,
            },
            {
              key: "",
              label: "library",
              icon: <IoLibraryOutline />,
              url: AppRoute.library,
            },
            {
              key: "",
              label: "blog",
              icon: <FaBloggerB />,
              url: AppRoute.blogs,
            },
          ].map((item) => (
            <NavLink
              key={item.key}
              href={item.url}
              label={item.label}
              className="capitalize hover:rounded-lg"
              leftSection={item.icon}
              variant="subtle"
              active={item.url === pathname}
            />
          ))}
        </Flex>
      </Center>
      <Button variant="light" leftSection={<FiDownloadCloud size={22} />}>
        Resume
      </Button>
    </Flex>
  );
};

export default Navbar;
