import SEOHead from '@components/shared/SeoHead';
import Text from '@components/shared/Text';
import LandingLayout from '@layouts/LandingLayout';
import ListFlow from '@modules/skill_graph/components/ListFlow';
import { ReactElement } from 'react';

const SkillGraph = () => (
  <div className="flex flex-col gap-4">
    <Text text="Here are few of my skills I am confident of" />
    <ListFlow />
  </div>
);

SkillGraph.getLayout = function getLayout(page: ReactElement) {
  return (
    <LandingLayout>
      <>
        <SEOHead title="All Skill " description="Skill Graph." />
        {page}
      </>
    </LandingLayout>
  );
};

export default SkillGraph;
