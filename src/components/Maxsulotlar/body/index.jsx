import { Container, Item,  } from "./style";
import Delete from "../../Generic/Delete";
import { MaxsulotContext } from "../../../context/Maxsulotlar/maxsulotlar";
import Menu from "../Menu";
export const Body = ({ value }) => {
  const [, dispatch] = MaxsulotContext();

  const onDelete = (value) => {
    console.log(value, "test");
    // let filtered = maxsulotlar.filter((data) => data.id !== value.id);
    dispatch({ type: "delete", payload: value });
  };
  return (
    <Container>
      <Item>
        <Item.Text>
          <Item.Img src={value.avatar} /> {value.food}
        </Item.Text>
        <Item.Text>{value.kategotiya}</Item.Text>
        <Item.Text>{value.price}</Item.Text>
        <Item.Text>{value.additional}</Item.Text>

        <Item.Text last>
          {/* <Pen /> */}

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
