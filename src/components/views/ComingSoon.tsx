import Text from '@components/shared/Text';

const underConstructionText =
  "I'm preparing something amzaing and exciting for you. Meanwhile feel free to intract with other parts of the site or interact with my social networks.";
const ComingSoon = () => (
  <div className="h-[60vh] grid place-content-center gap-8">
    <Text text="Coming Soon" variant="h1" customClass="text-center" />
    <div className="flex justify-center items-center">
      <Text
        text={underConstructionText}
        variant="p"
        customClass="text-justify w-full md:w-2/3"
      />
    </div>
  </div>
);

export default ComingSoon;
