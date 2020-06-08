import React from "react";
import ReactDom from "react-dom";
import { PortalProps } from "./type";

const Portal = ({ node, children }: PortalProps) => {
  return ReactDom.createPortal(children, node);
};

export default Portal;
