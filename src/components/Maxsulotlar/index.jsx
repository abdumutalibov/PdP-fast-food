import React from "react";
import Navbar from "./Navbar";
import Body from "./body";
import { Container } from "./style";
// import { maxsulotlar } from "../../mock/card";
import Top from "./Top";
import { MaxsulotContext } from "../../context/Maxsulotlar/maxsulotlar";

export const Maxsulotlar = ({ location }) => {
    const [maxsulotlar] = MaxsulotContext();
  return (
    <Container>
      <Navbar />
      <Top />
      {maxsulotlar.map((value) => (
        <Body key={value.id} value={value} />
      ))}
    </Container>
  );
};
export default Maxsulotlar;
