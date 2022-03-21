import styled from "styled-components";
import { ReactComponent as search } from "../../../assets/icons/search.svg";
import { ReactComponent as plus } from "../../../assets/icons/plus.svg";
export const Container =  styled.div`
display: flex;
width: 100%;
margin-bottom:30px;
`
export const Wrapper =styled.div`
display: flex;
height: 80px;
padding: 22px 40px;
background: white;
align-items: center;
width: ${({align})=>(align ? '300px' : '100%')};
border: 1px solid #e5e5e5;

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
export const Title = styled.div`
  font-family: SFProDisplay bold;
  font-size: 12px;
  line-height: 16px;
  color: #2d3a45;
`;

export const Tab = styled.div`
display: flex;
height: 50px;
align-items: center;
padding: 19px;
width: 40%;
background: #edeff3;
border-radius:24px;
justify-content: space-between;
margin-right: auto;
`
export const Input = styled.input`
width:60%;
border:none;
background: #edeff3;
:focus{
    outline: none;
}
`
export const Search = styled(search)`
  padding: 11px;
  width: 46px;
  font-size:80px;
  height: 66px;
  min-width: 36px;
  min-height: 36px;
  cursor: pointer;
  margin-right: 14px;
`;