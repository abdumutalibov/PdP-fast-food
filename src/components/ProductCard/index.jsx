import React, { useState } from "react";
import Cancel from "../Generic/Cancel";
import Done from "../Generic/Done";
import { Container, Footer, IconWrapper, Info, Timer, Wrapper } from "./style";
export const ProductCard = ({value}) => {
 
  return (
    <Container>
      <Wrapper>
        <Info.OrderID>{value.orderId} </Info.OrderID>
        <IconWrapper>
          <Info.Save />
        </IconWrapper>
        <Timer>
          <Info.Clock />
          <Info.Text>{value.time.getHours()}: {value.time.getMinutes()}</Info.Text>
        </Timer>
      </Wrapper>
      <Wrapper flex ={'true'}>
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
          <Info end ={'true'}>
            <Info.PaymeIcon />
            <Info.Payme>Payme</Info.Payme>
          </Info>
        </Info>
      </Wrapper>
      <Wrapper flex last={'true'}>
        <Footer>
          <div>
            <Info.Total>Operator:</Info.Total>
            <Info.Name>{value.poerator.name}</Info.Name>
          </div>
          {/* <Done/> */}

          <Cancel/>
        </Footer>
        <Footer>
          <div>
            <Info.Total>Filial:</Info.Total>
            <Info.Name>
              {value.filial.title}<br />
              {value.filial.location}
            </Info.Name>
          </div>
          <Done />
        </Footer>
      </Wrapper>
    </Container>
  );
};
export default ProductCard;
