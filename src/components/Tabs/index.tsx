import { FC } from "react";
import Tabs, { TabsProps } from "./tabs";
import TabItem, { TabItemProps } from "./tabItem";

export type ITabsComponent = FC<TabsProps> & {
  Item: FC<TabItemProps>;
};

const ITabs = Tabs as ITabsComponent;

ITabs.Item = TabItem;

export default ITabs;
