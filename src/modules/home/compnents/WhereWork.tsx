/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { orderBy } from 'lodash';
import classNames from 'classnames';

import SectionTitle from '@components/shared/SectionTitle';
import Text from '@components/shared/Text';

import { DeckCard, workDock } from 'constants/AboutMe';

const WhereWork = () => {
  const [activeTab, setActiveTab] = useState<DeckCard>(
    orderBy(workDock, ['order'], ['asc'])[0] as DeckCard
  );
  return (
    <div className="flex flex-col gap-4">
      <SectionTitle index="02" label="Work Places" />
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <div className="md:w-1/5 flex flex-col md:border-l-2 border-gray-600 gap-4">
          {orderBy(workDock, ['order'], ['asc']).map((work: DeckCard) => (
            <div
              key={work.id}
              onClick={() => setActiveTab(work)}
              className={classNames(
                'w-full -ml-[2px] text-left flex justify-start py-2 rounded-tr-md rounded-br-md cursor-pointer hover:bg-[#4e85ff]/25 hover:border-l-2 hover:border-[#4e85ff]',
                activeTab.id === work.id &&
                  'border-l-2 border-[#4e85ff] text-[#4e85ff]'
              )}
            >
              <div className="ml-6">
                <Text text={work.title} variant="h6" />
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-3/4">
          <div className="flex flex-col justify-start items-start gap-3">
            <div className="flex flex-col justify-start items-start gap-1">
              <Text text={activeTab.subtitle} variant="h3" />
              <div className="flex items-center gap-2">
                <Text text={activeTab.startDate} variant="p" />
                <Text text="-" variant="p" />
                <Text text={activeTab.endDate} variant="p" />
              </div>
            </div>
            <div>
              <Text text={activeTab.description} variant="p" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhereWork;
