import React, {  createContext,  useContext, useReducer } from "react";
import { maxsulotlar } from "../../mock/card";
import { reducer } from "./reducer";

export const MaxsulotlarContext = createContext();
export const MaxsulotContext = () => useContext(MaxsulotlarContext)

export const Maxsulotlar = ({ children }) => {
  // const [maxsulotData, setMaxsulotData] = useState( maxsulotlar );
  return (
    <MaxsulotlarContext.Provider value={useReducer(reducer, maxsulotlar)}>
      {children}
    </MaxsulotlarContext.Provider>
  );
};
