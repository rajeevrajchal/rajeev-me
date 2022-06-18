/* eslint-disable react/require-default-props */
import Text from '@components/shared/Text';
import classNames from 'classnames';

interface SectionTitleProps {
  index: string;
  label: string;
  customClass?: string;
}
const SectionTitle = (props: SectionTitleProps) => {
  const { index, label, customClass } = props;
  return (
    <div className="flex items-center justify-start gap-4 ">
      <Text
        text={`${index}. ${label}`}
        variant="h4"
        customClass={classNames('text-[#4e85ff]', customClass)}
      />
      <div className="bg-gray-500 h-[0.5px] md:w-1/4" />
    </div>
  );
};

export default SectionTitle;
