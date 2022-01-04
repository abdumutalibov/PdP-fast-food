import React, { createContext } from "react";
import { Buyurtmalar } from "./Buyurtmalar/buyurtmalar";
import { Kategoriyalar } from "./Kategoriya/kategoriya";
import { Maxsulotlar } from "./Maxsulotlar/maxsulotlar";
// const MainContext = createContext();

export const MainContext = ({ children }) => {
  return (
    <div>
      <div>
        <Buyurtmalar>
          <Maxsulotlar>
            <Kategoriyalar>

            {children}
            </Kategoriyalar>
            </Maxsulotlar>
        </Buyurtmalar>
      </div>
      {/* <Maxsulotlar>{children}</Maxsulotlar> */}
    </div>
  );
};
