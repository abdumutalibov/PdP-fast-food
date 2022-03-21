import styled from "styled-components";
import { ReactComponent as plus } from "../../../assets/icons/plus.svg";

export const Container = styled.div`
display: flex;
margin-bottom:30px;

`
export const Wrapper = styled.div`
display: flex;
height: 80px;
padding: 22px 40px;
background: white;
border-left: 1px solid #e5e5e5;
width: ${({first})=> (first ? '300px' : '100%')};
`
export const Plus = styled(plus)`
  padding: 11px;
  background: #20d472;
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 14px;
`;