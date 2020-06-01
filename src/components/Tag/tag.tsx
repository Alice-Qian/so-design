import React, { FC, useState } from "react";
import classNames from "classnames";
import Transition from "../Transition";
import Icon from "../Icon";

export type ThemeProps = "primary" | "success" | "warning" | "danger";

export interface TagProps {
  className?: string;
  /** Tag的主题色 */
  type?: ThemeProps;
  /** Tag的尺寸 */
  size?: "lg" | "sm";
  /** Tag的文本 */
  text: string;
  /** 关闭Tag */
  onClose?: () => void;
  /** 是否显示关闭图标 */
  closable?: boolean;
}

export const Tag: FC<TagProps> = ({
  className,
  type,
  size,
  text,
  onClose,
  closable,
  ...restProps
}) => {
  const [tagStatus, setTagStatus] = useState(true);
  const classes = classNames("tag", className, {
    [`tag-${type}`]: type,
    [`tag-${size}`]: size,
  });
  const handleClose = (e:React.MouseEvent) => {
    setTagStatus(false);
    if (onClose) {
      onClose();
    }
  };
  return (
    <Transition in={tagStatus} timeout={300} animation="zoom-in-left">
      <div className={classes} {...restProps}>
        <span>{text}</span>
        {closable && <Icon theme={type} icon="times" onClick={handleClose} />}
      </div>
    </Transition>
  );
};

Tag.defaultProps = {
  type: "primary",
  closable: true,
};

export default Tag;
