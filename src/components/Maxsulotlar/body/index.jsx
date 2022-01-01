import React, { useState } from "react";
import { Container, Item, Topbar } from "./style";

export const Body = ({ value }) => {
  return (
    <Container>
     
      <Item>
        <Item.Text><Item.Img src={value.avatar} />{value.food} </Item.Text>
        <Item.Text>{value.kategotiya}</Item.Text>
        <Item.Text>{value.price}</Item.Text>
        <Item.Text>{value.additional}</Item.Text>
        <Item.Text>{value.k}</Item.Text>
        
      </Item>
     
    </Container>
  );
};
export default Body;
