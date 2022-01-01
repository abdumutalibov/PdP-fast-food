import styled from "styled-components";
import { ReactComponent as search } from "../../../assets/icons/search.svg";
import { ReactComponent as plus } from "../../../assets/icons/plus.svg";
import { ReactComponent as path } from "../../../assets/icons/Path.svg";

export const Container = styled.div`
display: flex;
/* flex-direction:column; */
width: 100%;
margin-bottom: 30px;
`
export const Wrapper = styled.div`
display: flex;
height: 80px;
padding: 22px 40px;
background: white;
align-items: center;
width: ${({align})=> (align ? '300px' : '100%')};
border: 1px solid #e5e5e5;
`;
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
export const Path = styled(path)`
 width: 50px;
  height: 50px;
  padding: 3px;
  background: #ffffff;
  border-radius: 25px;
border: 7px solid #e5e5e5;

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
margin-right: 25px;
`
export const Input = styled.input`
width:60%;
border:none;
background: #edeff3;
:focus{
    outline: none;
}
`
export const Topbar = styled.div`
  display: flex;
  height: 36px;
  width: 100%;
  background: white;
  align-items: center;
  justify-content:space-around;
  `;
Topbar.Item = styled.div`
  /* margin: 0 166px 0 56px; */
  border-left: ${({first}) => (!first && '1px solid #d9d9d9')} ;
  padding-left: 15px;
  `;


export const Item = styled.div`

display: flex;
height: 60px;
width: 100%;
background: white;
align-items: center;
justify-content:space-around;
margin:30px 0 -10px 20px;
background: #FFFFFF;
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
border-radius: 6px;
:hover{
  box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
}
`;