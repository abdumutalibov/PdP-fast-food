import React, { createContext, useContext, useReducer } from "react";
import { kategoriya } from "../../mock/card";
import { reducer } from "./reducer";

export const KategoriyalarContext = createContext();
export const KategoriyaContext = () => useContext(KategoriyalarContext);

export const Kategoriyalar = ({ children }) => {
  // const [maxsulotData, setMaxsulotData] = useState( maxsulotlar );
  return (
    <KategoriyalarContext.Provider value={useReducer(reducer, kategoriya)}>
      {children}
    </KategoriyalarContext.Provider>
  );
};
