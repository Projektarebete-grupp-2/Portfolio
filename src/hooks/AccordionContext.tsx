import { createContext } from "react";

interface IAccordionContextValue {
  activeItem: any;
  setActiveItem: any;
}

export const AccordionContext = createContext<IAccordionContextValue | undefined>(undefined);

export const Provider = AccordionContext.Provider;