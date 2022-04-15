import React from 'react';
import Link from 'next/link';
import { ChevronsRight } from 'react-feather';
import { AppRoute } from 'constants/AppRoute';
import Spacer from '@components/Spacer';
import Button from '@components/Button';

const Projects = () => (
  <div>
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-extrabold">Projects</h1>
      <Link href={AppRoute.PROJECTS} passHref>
        <a className="flex items-center gap-3 hover:underline">
          <span className="text-md font-bold"> All projects</span>
          <ChevronsRight />
        </a>
      </Link>
    </div>
    <Spacer />
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 grid-rows-auto">
      {[1, 2, 3].map(() => (
        <div className="h-[38vh] lg:h-[28vh] rounded-lg p-8 overflow-hidden relative card drop-shadow-2xl bg-base-100">
          <h1 className="text-2xl font-bold"> Project 1 </h1>

          <div className="mt-8">
            <span className="text-ellipsis overflow-hidden ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              sequi cum quam eligendi sit. Neque accusantium possimus debitis
              optio ex, culpa nobis quod
            </span>
          </div>

          <div className="absolute bottom-0 left-0 p-8 mt-8">
            <Button variant="info" label="View Detail" outline />
          </div>

          <div className="w-2 h-[50vh] lg:h-[28vh] bg-blue-300 absolute top-0 left-0" />
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
