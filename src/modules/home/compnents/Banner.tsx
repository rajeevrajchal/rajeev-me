import Text from '@components/shared/Text';
import NextLink from '@components/shared/Link';
import { NLV, UPWORK } from 'constants/SocialLink';

const MultipleText = () => (
  <div className="flex flex-col gap-2">
    <Text
      variant="p"
      customClass="tracking-wider w-full text-justify md:w-4/5"
      text="Fullstack Software developer, specializing in building digital web based softwares. Currently, I'm building simple, accessible product at: "
    />
    <Text
      text="Goal to pursue a career as a Fullstack Software Developer."
      variant="p"
      customClass="tracking-wider w-full text-justify md:w-4/5"
    />
    <div className="flex flex-col gap-1 md:gap-0">
      <NextLink
        href={NLV}
        label="Next Level Value"
        external
        customClass="w-fit"
      />
      <NextLink href={UPWORK} label="Upwork" external customClass="w-fit" />
    </div>
  </div>
);

const Banner = () => (
  <div className="flex flex-col gap-6">
    <Text text="Hello there, I'm " variant="h3" customClass="text-[#4e85ff]" />
    <Text text="Rajeev Rajchal," variant="h1" />
    <Text
      text="Fullstack  JavaScript/Typescript  Developer"
      variant="h2"
      customClass="capitalize md:leading-5 tracking-wider text-justify"
    />
    <Text text={<MultipleText />} variant="p" />
  </div>
);

export default Banner;
