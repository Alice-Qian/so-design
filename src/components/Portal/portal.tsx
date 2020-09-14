import React, { useRef, useEffect } from "react";
import ReactDom from "react-dom";
import { PortalProps } from "./type";

const canUseDOM = !!(
  typeof window != undefined && window.document && window.document.createElement
)

const Portal = ({ node, children }: PortalProps) => {
  const defaultNodeRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (defaultNodeRef.current) {
      document.body.removeChild(defaultNodeRef.current);
    }
  }, []);

  if(!canUseDOM) return null;

  if (!node && !defaultNodeRef.current) {
    const defaultNode = document.createElement("div");
    defaultNode.className = "react-portal";
    defaultNodeRef.current = defaultNode;
    document.body.appendChild(defaultNode);
  }
  return ReactDom.createPortal(children, (node || defaultNodeRef.current)!); // ! 断言
};

export default Portal;
