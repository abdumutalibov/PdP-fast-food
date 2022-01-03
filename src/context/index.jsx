import React, { createContext } from "react";
import { Buyurtmalar } from "./Buyurtmalar/buyurtmalar";
import { Maxsulotlar } from "./Maxsulotlar/maxsulotlar";
// const MainContext = createContext();

export const MainContext = ({ children }) => {
  return (
    <div>
      <div>
        <Buyurtmalar>
          <Maxsulotlar>{children}</Maxsulotlar>
        </Buyurtmalar>
      </div>
      {/* <Maxsulotlar>{children}</Maxsulotlar> */}
    </div>
  );
};
