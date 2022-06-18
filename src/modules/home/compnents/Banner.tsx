import Text from '@components/shared/Text';
import NextLink from '@components/shared/Link';

const MultipleText = () => (
  <>
    <Text
      variant="p"
      customClass="tracking-wider"
      text="I'm software developer specializing in building digital web based softwares. Currently, I'm am building simple, accessible product at"
    />
    <NextLink href="http://nextlevelvalue.nl/" label="Next Level Value" />
  </>
);

const Banner = () => (
  <div className="flex flex-col gap-3">
    <Text text="Namaste, I'm" variant="h3" customClass="text-[#4e85ff]" />
    <Text text="Rajeev Rajchal," variant="h1" customClass="text-white" />
    <Text text="A freelance software developer" variant="h3" />
    <Text text={<MultipleText />} variant="p" />
  </div>
);

export default Banner;
