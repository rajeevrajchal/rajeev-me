import { ReactElement } from "react";
import { FaHome, FaRegUserCircle } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoLibraryOutline } from "react-icons/io5";
import AppRoute from "./route";

export type NAVBAR = {
  key: string;
  label: string;
  icon: ReactElement;
  url: string;
};

const navbar: NAVBAR[] = [
  {
    key: "",
    label: "home",
    icon: <FaHome />,
    url: AppRoute.home,
  },
  {
    key: "about",
    label: "about",
    icon: <FaRegUserCircle />,
    url: AppRoute.about,
  },
  {
    key: "projects",
    label: "projects",
    icon: <GrProjects size={12} />,
    url: AppRoute.projects,
  },
  {
    key: "",
    label: "library",
    icon: <IoLibraryOutline />,
    url: AppRoute.library,
  },
];
export default navbar;
