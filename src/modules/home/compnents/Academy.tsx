import SectionTitle from '@components/shared/SectionTitle';
import Text from '@components/shared/Text';

type AcademyType = {
  degree: string;
  school: string;
  startDate: string;
  endDate: string;
  description: string;
};

const academies: AcademyType[] = [
  {
    degree: 'Bsc. Computer Science And Information Technology',
    school: 'Tribhuvan University',
    startDate: '2017',
    endDate: '2021',
    description:
      "I've pursue my Bsc. in Computer Science and Information Technology from the Tribhuvan University of Nepal. Major subjects include: Computer Science, Information Technology, Web Development, Database Management, Software Engineering, and Software Design & Lifecycles.",
  },
  {
    degree: 'Intermediate (+2)',
    school: 'Higher Secondary School',
    startDate: '2017',
    endDate: '2021',
    description:
      "I've pursue my Intermediate (+2) from the Higher Secondary School of Nepal. Major subjects are: Mathematics, Physics, Chemistry, and Computer Science",
  },
];

const Academy = () => (
  <div className="flex flex-col gap-4">
    <SectionTitle index="03" label="Academy" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      {academies.map((academy: AcademyType) => (
        <div className="flex flex-col gap-3 border-l-4 border-[#4e85ff] rounded-md px-4 ">
          <div className="flex flex-col gap-1 ">
            <Text variant="h3" text={academy.degree} />
            <Text text={academy.school} />
            <div className="flex justify-start items-center gap-4">
              <Text text={academy.startDate} />
              <Text text="-" />
              <Text text={academy.endDate} />
            </div>
            <div>
              <Text text={academy.description} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Academy;
