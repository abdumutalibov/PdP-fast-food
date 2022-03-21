import React, { useState } from "react";
import Body from "./Body";
import Navbar from "./Navbar";
import { Container } from "./style";
export const Buyutmalar = ({ location }) => {
  const [active, setActive] = useState(true);

  return (
    <Container>
      <Navbar onClick={(state) => setActive(state)} />
      <Body active={active} />
    </Container>
  );
};

export default Buyutmalar;
