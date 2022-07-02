/* eslint-disable react/no-array-index-key */
import { BiRightArrow } from 'react-icons/bi';

import SectionTitle from '@components/shared/SectionTitle';
import Text from '@components/shared/Text';

import { aboutDetail, techs, interestFields } from 'constants/AboutMe';

const About = () => (
  <div className="flex flex-col gap-6">
    <SectionTitle index="01" label="About Me" />
    <div className="flex flex-col-reverse gap-8 md:flex-row items-start md:items-center ">
      <div className="md:w-3/4 ">
        <Text text={aboutDetail} customClass="w-full text-justify md:w-4/5" />
        <div className="flex flex-col gap-3">
          <Text text="Here are a few technologies I’ve been working with recently:" />
          <div className="grid grid-cols-2 gap-2">
            {techs.map((item: string, index: number) => (
              <div
                className="flex items-center gap-2 cursor-default"
                key={`${item}-${index}`}
              >
                <BiRightArrow />
                <Text text={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:w-1/4  flex justify-center items-center ">
        <img
          src="https://media-exp2.licdn.com/dms/image/C5603AQGnEbqJFNsdvQ/profile-displayphoto-shrink_400_400/0/1650351249447?e=1661990400&v=beta&t=P2PHJcxB3W1VNn2lVhJ9eXk1v7wJV8gDRTQpQuGY7L8"
          alt=""
          className="md:w-full w-2/3 mask mask-hexagon "
        />
      </div>
    </div>

    <div className="md:w-3/4">
      <div className="flex flex-col gap-3">
        <Text text="Fields of intereset" />
        <div className="grid grid-cols-2 gap-2">
          {interestFields.map((item: string, index: number) => (
            <div
              className="flex items-center gap-2 cursor-default"
              key={`${item}-${index}`}
            >
              <BiRightArrow />
              <Text text={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default About;
