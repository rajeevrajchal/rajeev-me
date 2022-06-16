import Text from '@components/shared/Text';

interface SectionTitleProps {
  index: string;
  label: string;
}
const SectionTitle = (props: SectionTitleProps) => {
  const { index, label } = props;
  return (
    <div className="flex items-center justify-start gap-4 ">
      <Text
        text={`${index}. ${label}`}
        variant="h4"
        customClass="text-[#4e85ff]"
      />
      <div className="bg-gray-500 h-[0.5px] md:w-1/4" />
    </div>
  );
};

export default SectionTitle;
