import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 36px;
  background: white;
  align-items: center;
  justify-content:space-between;
  margin-bottom:30px;
`
Container.Wrapper = styled.div`
display: flex;
align-items: center;
width: 100%;
background:white;
border-left: ${({first})=> (!first && '1px solid #d9d9d9')};
padding-left: 15px;

`