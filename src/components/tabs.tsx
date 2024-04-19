import { TabNav as RTabNav } from "@radix-ui/themes";

type TAB = {
  label: string;
  key: string;
  href: string;
};

interface TabsProps {
  active: string;
  tabs: TAB[];
}

const TabsNav = (props: TabsProps) => {
  const { active, tabs } = props;

  return (
    <RTabNav.Root>
      {tabs.map((tab: TAB, index: number) => (
        <RTabNav.Link
          active={active === tab.key}
          key={`${tab.key}-${index}`}
          className="cursor-pointer"
          href={tab.href}
        >
          {tab.label}
        </RTabNav.Link>
      ))}
    </RTabNav.Root>
  );
};

export default TabsNav;
