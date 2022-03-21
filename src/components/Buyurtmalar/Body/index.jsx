<<<<<<< HEAD
import React, { useState } from "react";
import { Container } from "./style";

const Navbar = () => {
  return <Container></Container>;
};

export default Navbar;
=======
import React from "react";
import MenuH  from "../menuH";
import MenuV  from "../menuV";

export const Body = (props) => {
   return     props.active ? <MenuV/> :<MenuH/>
  
};
export default Body;
>>>>>>> a527c1d6db56355461f13b35df2753527a0c239d
