/* eslint-disable react/no-array-index-key */
import { BiRightArrow } from 'react-icons/bi';

import SectionTitle from '@components/shared/SectionTitle';
import Text from '@components/shared/Text';

import { aboutDetail, techs } from 'constants/AboutMe';

const About = () => (
  <div className="flex flex-col gap-2">
    <SectionTitle index="01" label="About Me" />
    <Text text={aboutDetail} customClass="w-full text-justify md:w-4/5" />
    <div className="flex flex-col gap-3">
      <Text text="Here are a few technologies I’ve been working with recently:" />
      <div className="grid grid-cols-2 gap-2">
        {techs.map((item: string, index: number) => (
          <div className="flex items-center gap-2" key={`${item}-${index}`}>
            <BiRightArrow />
            <Text text={item} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default About;
