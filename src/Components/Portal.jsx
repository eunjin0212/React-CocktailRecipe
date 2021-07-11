import ReactDOM from "react-dom";
const ModalPortal = ({ children, style }) => {
  const el = document.getElementById("modal");
  return ReactDOM.createPortal(children, el);
};

export default ModalPortal;
