import React from 'react';

interface IProps {
  message: string
}

const Hello: React.FunctionComponent<IProps> = (props) => {
  return <h2>{props.message}</h2>
}

Hello.defaultProps = {
  message: "hello"
}

export default Hello