import React, { FunctionComponent, useReducer } from "react";
import "./AccordionStyle.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {QuestionAnimation} from "./AccordionDivStyle";
import useAccordion from "../hooks/useAccordion";
import { Provider } from "../hooks//AccordionContext";


 interface Composition {
  Answer: React.FC;
  Header: React.FC;
}




const reducer = (state: boolean, action: string) => {
  switch (action) {
    case "open":
      return true;
    case "close":
      return false;
    default:
      return state;
  }
};

const Accordion: React.FC & Composition = ({
  children,
}) => {
  const [activeItem, setActiveItem] = useReducer(reducer, false);

  return <Provider value={{ activeItem, setActiveItem }}>{children}</Provider>;
};

const Header: React.FC = ({
  children,
  
}) => {
  const { setActiveItem, activeItem } = useAccordion();

  return (
    <button onClick={() => setActiveItem(!activeItem)} className="questionButton">
      {children}
      <div>
        <div>
          {activeItem ? (
            <FaChevronUp
            
              onClick={() => setActiveItem("close")}
              style={{ color: "red" }}
            />
          ) : (
            <FaChevronDown onClick={() => setActiveItem("open")} style={{ color:"red"}}/>
          )}
        </div>
      </div>
    </button>
  );
};

const Content: FunctionComponent = ({ children }) => {
  const { activeItem } = useAccordion();

  return <QuestionAnimation open={activeItem}>{children}</QuestionAnimation>;
};

Accordion.Header = Header;
Accordion.Answer = Content;

export default Accordion;
