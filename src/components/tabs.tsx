import { Tabs as RTabs } from "@radix-ui/themes";

type TAB = {
  label: string;
  key: string;
};

interface TabsProps {
  active: string;
  tabs: TAB[];
  onChangeTab: (key: string) => void;
}

const Tabs = (props: TabsProps) => {
  const { active, tabs, onChangeTab } = props;

  return (
    <RTabs.Root defaultValue={active}>
      <RTabs.List>
        {tabs.map((tab: TAB, index: number) => (
          <RTabs.Trigger
            value={tab.key}
            key={`${tab.key}-${index}`}
            onClick={() => onChangeTab(tab.key)}
            className="cursor-pointer"
          >
            {tab.label}
          </RTabs.Trigger>
        ))}
      </RTabs.List>
    </RTabs.Root>
  );
};

export default Tabs;
