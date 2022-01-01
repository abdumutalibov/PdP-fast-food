import React from "react";
import {
  Container,
  Input,
  Path,
  Plus,
  Search,
  Tab,
  Title,
  Wrapper,
} from "./style";

export const Navbar = () => {
  return (
    <Container>
      <Wrapper align>
        <Plus />
        <Title>
          Yangi buyurma <br />
          qo'shish
        </Title>
      </Wrapper>
      <Wrapper>
        <Tab>
          <Input placeholder="Qidirish"></Input>
          <Search />
        </Tab>
        <Path />
      </Wrapper>
      
    </Container>
  );
};

export default Navbar;
