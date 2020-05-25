import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import classNames from "classnames";

export type ButtonSize = "lg" | "sm";
export type ButtonType = "primary" | "default" | "danger" | "link";
interface BaseButtonProps {
  /** Button的自定义类名 */
  className?: string;
  /** Button是否可用 */
  disabled?: boolean;
  /** Button的尺寸 */
  btnSize?: ButtonSize;
  /** Button的类型 */
  btnType?: ButtonType;
  /** Button的跳转链接 */
  href?: string;
  // children: ReactNode;
  // 不必再加children属性，组件使用了FC类型，props会获得children属性
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
// Partial 把属性设置为可选的
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    disabled,
    btnSize,
    btnType,
    children,
    href,
    ...restProps
  } = props;
  // btn, btn-lg, btn-primary
  const classes = classNames(className, "btn", {
    [`btn-${btnType}`]: btnType,
    [`btn-${btnSize}`]: btnSize,
    disabled: btnType === "link" && disabled,
  });
  if (btnType === "link" && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: "default",
};

export default Button;
