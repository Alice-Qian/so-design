import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import Alert, { AlertProps } from './alert'

const defaultProps: AlertProps = {
  title: "test"
}

const closeProps: AlertProps = {
  title: "test",
  description: "This is some info about the test",
  type: "success",
  closable: true,
  onClose: jest.fn()
}

describe('test alert component', () => {
  it('should render correct default alert', async () => {
    const { container, queryByText } = render(<Alert {...defaultProps} />);
    expect(container.querySelector(".alert")).toHaveClass("alert-default");
    expect(queryByText('test')).toBeInTheDocument()
  })
  it('should render closable alert', async () => {
    const { getByTestId, container, queryByText } = render(<Alert {...closeProps} />);
    expect(container.querySelector(".alert")).toHaveClass("alert-success");
    expect(queryByText('test')).toBeInTheDocument()
    // 模拟点击关闭图标
    fireEvent.click(getByTestId('icon'));
    expect(closeProps.onClose).toHaveBeenCalled();
    // 测试点击关闭图标后，是否隐藏Alert组件
    await wait(() => {
      expect(queryByText("test")).not.toBeInTheDocument();
    });
  })
})