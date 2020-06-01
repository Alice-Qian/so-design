import React, { FC } from "react";

export interface TabItemProps {
  disabled?: boolean;
  label: any;
}

export const TabItem: FC<TabItemProps> = ({ children }) => {
  return <div className="tab-panel">{children}</div>;
};

export default TabItem;
