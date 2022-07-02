import NextLink from '@components/shared/Link';
import SectionTitle from '@components/shared/SectionTitle';
import Text from '@components/shared/Text';

const Contact = () => (
  <div className="flex flex-col gap-2">
    <SectionTitle index="04" label="Get in touch" customClass="capitalize" />
    <div className="flex flex-col justify-start items-start gap-4">
      <Text
        text="Being a freelance developer, I am looking to collabrate on some new ideas. Contacting me is super easy with email or from different platform added on this system."
        customClass="w-3/4"
      />
      <NextLink
        href="mailto:rajeevrajchal12@gmail.com?subject=Hello Rajeev, I've some new ideas for you"
        label="Say Hello"
        customClass="btn btn-info btn-md"
      />
    </div>
  </div>
);

export default Contact;
