import React, { FC, useState } from 'react'
import classNames from 'classnames'
import Icon from "../Icon";

export type AlertType = 'success' | 'default' | 'danger' | 'warning'

export interface AlertProps {
  className?: string,
  title: string,
  description?: string,
  type?: AlertType,
  onClose?: () => void,
  closable?: boolean
}

const Alert: FC<AlertProps> = (props) => {
  const [alertStatus, setAlertStatus] = useState<boolean>(true)
  const { className, title, description, type, onClose, closable, ...restProps } = props
  const classes = classNames('alert', className, {
    [`alert-${type}`]: type,
  })
  const handleClose = () => {
    setAlertStatus(false)
    if (onClose) {
      onClose()
    }
  }
  return (
    <>
      {alertStatus &&
        <div className={classes} >
          {
            closable && (<span className="alert-close-icon" onClick={handleClose}>
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

export default Alert