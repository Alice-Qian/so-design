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
  closable: false,
  onClose: jest.fn()
}

describe('test alert component',  () => {
  it('should render correct default alert',async () => {
    const { getByText, container, queryByText } = render(<Alert {...defaultProps} />);
    expect(container.querySelector(".alert")).toHaveClass("alert-default");
    expect(queryByText('test')).toBeInTheDocument()
    fireEvent.click(getByText('times'));
    expect(defaultProps.onClose).toHaveBeenCalled()
    await wait(()=>{
      expect(queryByText("Test")).not.toBeInTheDocument();
    })
  })
  it('should render closable alert', () => {

  })
})