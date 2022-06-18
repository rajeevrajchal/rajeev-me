import Text from '@components/shared/Text';
import NextLink from '@components/shared/Link';
import { NLV, UPWORK } from 'constants/SocialLink';

const MultipleText = () => (
  <div className="flex flex-col gap-2">
    <Text
      variant="p"
      customClass="tracking-wider w-full text-justify md:w-4/5"
      text="I'm software developer specializing in building digital web based softwares. Currently, I'm am building simple, accessible product at: "
    />
    <div className="flex flex-col gap-1 md:gap-0">
      <NextLink href={NLV} label="Next Level Value" />
      <NextLink href={UPWORK} label="Upwork" />
    </div>
  </div>
);

const Banner = () => (
  <div className="flex flex-col gap-3">
    <Text text="Namaste, I'm" variant="h3" customClass="text-[#4e85ff]" />
    <Text text="Rajeev Rajchal," variant="h1" customClass="text-white" />
    <Text text="software developer" variant="h3" customClass="capitalize" />
    <Text text={<MultipleText />} variant="p" />
  </div>
);

export default Banner;
