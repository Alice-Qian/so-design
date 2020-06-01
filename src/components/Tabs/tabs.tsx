import React, { FC, FunctionComponentElement, useState } from "react";
import classNames from "classnames";
import { TabItemProps } from "./tabItem";

type Tabstype = "line" | "card";

export interface TabsProps {
  defaultIndex?: number;
  className?: string;
  onSelect?: (selectedIndex: number) => void;
  type?: Tabstype;
}

const Tabs: FC<TabsProps> = ({
  defaultIndex,
  className,
  onSelect,
  type,
  children,
  ...restProps
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navClass = classNames("tabs-nav", {
    "nav-line": type === "line",
    "nav-card": type === "card",
  });
  const handleClick = (
    e: React.MouseEvent,
    index: number,
    disabled: boolean | undefined
  ) => {
    if (disabled) {
      return;
    }
    setActiveIndex(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const renderNav = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<TabItemProps>;
      const { disabled, label } = childElement.props;
      const classes = classNames("tabs-nav-item", {
        "is-active": index === activeIndex,
        disabled,
      });
      return (
        <li
          className={classes}
          key={`nav-item-${index}`}
          onClick={(e) => {
            handleClick(e, index, disabled);
          }}
        >
          {label}
        </li>
      );
    });
  };
  const renderContent = () => {
    return React.Children.map(children, (child, index) => {
      return index === activeIndex && child;
    });
  };
  return (
    <div className={`tabs ${className}`} {...restProps}>
      <ul className={navClass}>{renderNav()}</ul>
      <div className="tabs-content">{renderContent()}</div>
    </div>
  );
};

Tabs.defaultProps = {
  defaultIndex: 0,
  type: "line",
};

export default Tabs;
