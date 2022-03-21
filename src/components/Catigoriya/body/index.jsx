import React from "react";
import { Container, Item } from "./style";
import { KategoriyaContext } from "../../../context/Kategoriya/kategoriya";
import Menu from "../Menu";
import Delete from "../../Generic/Delete";
export const Body = ({ value }) => {
  const [, dispatch] = KategoriyaContext();

  const onDelete = (value) => {
    console.log(value, "test");
    // let filtered = maxsulotlar.filter((data) => data.id !== value.id);
    dispatch({ type: "delete", payload: value });
  };
  return (
    <Container>
      <Item>
        <Item.Text> {value.food} </Item.Text>
        <Item.Text>{value.kategotiya}</Item.Text>
        <Item.Text>{value.empty}</Item.Text>
        <Item.Text last>
          <Menu />
          <div onClick={() => onDelete(value)}>
            <Delete />
          </div>
        </Item.Text>
      </Item>
    </Container>
  );
};
export default Body;
