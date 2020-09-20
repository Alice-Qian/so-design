import React, {
  HtmlHTMLAttributes,
  ReactElement,
  ChangeEvent,
  forwardRef,
} from "react";
import classNames from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Icon from "../Icon";

type InputSize = "lg" | "sm";

// Omit 忽略[size]属性
export interface InputProps
  extends Omit<HtmlHTMLAttributes<HTMLElement>, "size"> {
  disabled?: boolean;
  size?: InputSize;
  icon?: IconProp;
  prepend?: string | ReactElement;
  append?: string | ReactElement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: any;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { disabled, size, icon, prepend, append, ...restProps } = props;
  const classes = classNames("input-wrapper", {
    [`input-size-${size}`]: size,
    "is-disabled": disabled,
    "input-group": prepend || append,
    "input-group-prepend": !!prepend,
    "input-group-append": !!append,
  });
  const fixValue = (value: any) => {
    if (typeof value === "undefined" || value === null) {
      return "";
    }
    return value;
  };
  if ("value" in props) {
    delete restProps.defaultValue;
    restProps.value = fixValue(props.value);
  }
  return (
    <div className={classes}>
      {prepend && <div className="input-group-prepend">{prepend}</div>}
      {icon && (
        <div className="icon-wrapper">
          <Icon icon={icon} title={`title-${icon}`}></Icon>
        </div>
      )}
      <input
        ref={ref}
        className="input-inner"
        disabled={disabled}
        {...restProps}
      />
      {append && <div className="input-group-append">{append}</div>}
    </div>
  );
});

export default Input;
