import React, { useState } from "react";
import Cancel from "../Generic/Cancel";
import Done from "../Generic/Done";
import { Container, Footer, IconWrapper, Info, Timer, Wrapper } from "./style";
import { BuyurtmaContext } from "../../context/Buyurtmalar/buyurtmalar";
export const ProductCard = ({ value }) => {
  const [, dispatch] = BuyurtmaContext();

  const onCancel = (value) => {
    // console.log(value.categoria, value.id);
    // let filtered = card[value.categoria].filter((data) => data.id !== value.id);
    // let newData = { ...card, [value.categoria]: filtered };
    // console.log(filtered, newData );
    dispatch({ type: "delete", payload: value });
  };
  const onDone = (value) => {
    console.log(value, "Done");
  };

  return (
    <Container>
      <Wrapper>
        <Info.OrderID>{value.orderId} </Info.OrderID>
        <IconWrapper>
          <Info.Save />
        </IconWrapper>
        <Timer>
          <Info.Clock />
          <Info.Text>
            {value.time.getHours()}: {value.time.getMinutes()}
          </Info.Text>
        </Timer>
      </Wrapper>
      <Wrapper flex={"true"}>
        <Info>
          <Info.User />
          <div>
            <Info.Name>{value.user.name} </Info.Name>
            <Info.Number>{value.user.phone}</Info.Number>
          </div>
        </Info>
        <Info>
          <div>
            <Info.Total top>Umumiy Summa</Info.Total>
            <Info.Price>{value.total}</Info.Price>
          </div>
          <Info end={"true"}>
            <Info.PaymeIcon />
            <Info.Payme>Payme</Info.Payme>
          </Info>
        </Info>
      </Wrapper>
      <Wrapper flex last={"true"}>
        <Footer>
          <div>
            <Info.Total>Operator:</Info.Total>
            <Info.Name>{value.poerator.name}</Info.Name>
          </div>
          <div onClick={() => onCancel(value)}>
            <Cancel />
          </div>
        </Footer>
        <Footer>
          <div>
            <Info.Total>Filial:</Info.Total>
            <Info.Name>
              {value.filial.title}
              <br />
              {value.filial.location}
            </Info.Name>
          </div>
          <div onClick={() => onDone(value)}>
            <Done />
          </div>
        </Footer>
      </Wrapper>
    </Container>
  );
};
export default ProductCard;
