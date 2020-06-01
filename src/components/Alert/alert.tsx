import React, { FC, useState } from 'react'
import classNames from 'classnames'
import Icon from "../Icon";

export type AlertType = 'success' | 'default' | 'danger' | 'warning'

export interface AlertProps {
  /** Alert的自定义类名 */
  className?: string;
   /** Alert的标题 必选属性 */
   title: string;
   /** Alert的描述 */
   description?: string;
   /** Alert的类型 */
   type?: AlertType;
   /** 关闭Alert */
   onClose?: () => void;
   /** 是否显示关闭图标 */
   closable?: boolean;
}

export const Alert: FC<AlertProps> = (props) => {
  const [alertStatus, setAlertStatus] = useState<boolean>(true)
  const { className, title, description, type, onClose, closable, ...restProps } = props
  const classes = classNames('alert', className, {
    [`alert-${type}`]: type,
  })
  const handleClose = (e: React.MouseEvent) => {
    setAlertStatus(false)
    if (onClose) {
      onClose()
    }
  }
  return (
    <>
      {alertStatus &&
        <div className={classes} {...restProps}>
          {
            closable && (<span className="alert-close-icon" onClick={handleClose} data-testid="icon">
              <Icon size="xs" icon="times" />
            </span>)
          }
          <p className="alert-title">{title}</p>
          {description && <p className="alert-desc">{description}</p>}
        </div>}
    </>
  )
}

Alert.defaultProps = {
  type: 'default'
}

export default Alert;