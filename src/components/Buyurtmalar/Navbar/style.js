import styled from "styled-components";
import { ReactComponent as plus } from "../../../assets/icons/plus.svg";
import { ReactComponent as menuV } from "../../../assets/icons/menuV.svg";
import { ReactComponent as menuH } from "../../../assets/icons/menuH.svg";
export const Container = styled.div`
  display: flex;
`;
export const Wrapper = styled.div`
  display: flex;
  height: 80px;
  padding: 22px 40px;
  align-items: center;
  background: white;
  width: ${({ align }) => (align ? "300px" : "100%")};
  border: 2px solid #e5e5e5;
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
export const Title = styled.div`
  font-family: SFProDisplay bold;
  font-size: 12px;
  line-height: 16px;
  color: #2d3a45;
`;
export const Tab = styled.div`
display: flex;
padding: 6px;
height:50px;
width: 100%;
background: #edeff3;
border-radius:24px;
align-items:center;
justify-content: center;

`;
Tab.Item=styled.div`
display:flex;
align-items: center;
justify-content: center;
font-family:SFProDisplay;
font-size: 14px;
line-height: 16px;
width:170px;
color: #9c9fa2;
mix-blend-mode: normal;
cursor: pointer;
transition: all 0.3s;
background-color:${({active})=> active && 
'white'} ;
box-shadow:${({active})=> active && '0px 2px 2px rgba(174, 176, 181, 0.31)'};
border-radius:18px ;
height:36px;
`
export const Toggle = styled.div`

display: flex;
justify-content:space-between;
width:100px;
height:50px;
padding: 6px;
background: #edeff3;
border-radius:24px;
`
export const MenuV = styled(menuV)`
  width: 14px;
  height: 14px;
`;
export const MenuH = styled(menuH)`
  
  width: 14px;
  height: 14px;


`;
export const IconsWrapper = styled.div`
display:flex;
align-items: center;
justify-content: center;
  background: ${({active})=>(active ? 'white': 'transparent')};
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  border-radius: 50%;
  cursor: pointer;
transition:all 0.3s
`;