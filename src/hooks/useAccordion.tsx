import { useContext } from "react";
import { AccordionContext } from "./AccordionContext";
 


interface IAccordionContextValue {
  activeItem: any;
  setActiveItem: any;
}



export const useAccordion = (): IAccordionContextValue => {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error(
            "error"
        );
    }
    return context;
}

export default useAccordion;