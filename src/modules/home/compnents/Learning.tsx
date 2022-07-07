/* eslint-disable react/no-array-index-key */
import SectionTitle from '@components/shared/SectionTitle';
import Text from '@components/shared/Text';
import { techLearning } from 'constants/AboutMe';
import { BiRightArrow } from 'react-icons/bi';

const Learning = () => (
  <div className="flex flex-col gap-4">
    <SectionTitle index="03" label="Currently Learning" />
    <div className="flex flex-col gap-3">
      <Text
        text="Even I a not learning new thing, I usaually working to level up my skill with research on various aspect"
        customClass="text-[#4e85ff]"
      />
      <div className="grid grid-cols-2 gap-2">
        {techLearning.map((item: string, index: number) => (
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
);

export default Learning;
