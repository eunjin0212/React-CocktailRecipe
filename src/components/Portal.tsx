import ReactDOM from "react-dom";
import { ReactNode } from "react";
import "../css/portal.scss";

const Portal = ({ children }: { children: ReactNode }) => {
  const el = document.getElementById("modal");
  return ReactDOM.createPortal(children, el!);
};

export default Portal;
