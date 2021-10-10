import { NavLink } from "react-router-dom";
import styled from "styled-components"

export const Container = styled.div`

display: flex;
flex-direction: column;
width: 300px;
height:100vh;
padding:28px 0 40px 0;
background:white;
`;

export const LogoWrapper = styled.div`
padding: 0 24px;
display:flex;
margin-bottom:64px;
height:100px;
align-items:center;
`;
LogoWrapper.Img=styled.img`
width:70px;
height: 70px;
border-radius: 50%;
margin-right: 20px;
`;
export const Text =styled.div`
display: flex;
flex-direction: column;
`;

LogoWrapper.Title = styled.div`
font-family: SFProDisplay;
font-size:16px;
line-height: 19px;
color: #2d3a45;
`
Text.Title = styled.div`
  font-weight: 900;
  font-size: 18px;
  line-height: 19px;
  font-family: SFProDisplay bold;
  color: #2d3a45;
`;
Text.Desc=styled.div`
font-family: SFProDisplay;
font-size: 14px;
line-height: 14px;
color: #2D3A45;
mix-blend-mode: normal;
opacity: 0.5;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: ${({ chiqish }) => chiqish && 'center'};
  margin-top: ${({ chiqish }) => chiqish && 'auto'};
  cursor: ${({ chiqish }) => chiqish && 'pointer'};
  flex-direction: ${({ chiqish }) => (chiqish ? 'row' : 'column')};
`;

export const Item =styled.div`
display: flex;
align-items: center;
margin: 0px 24px  20px 0 ;
height: 48px;
`
export const Link = styled(NavLink)`
width:100%;
display:flex;
align-items: center;
  font-family: SFProDisplay;
  font-size: 17px;
  line-height: 18px;
  color: #2d3a45;
  text-decoration: none;
  border-radius: 0px 6px 6px 0px;
  :hover{
      color:#FCB600 ;
      
    }
 .icon {
    margin-right: 20px;
    width: 36px;
    height: 36px;
    padding: 10px;
    background: #f6f6f6;
    border-radius: 6px;
    margin-left: 40px;
    transition: all 0.4s;
    :hover{
     background-color: #FCB600;
    }

  }
  transition: all 0.2s;
`

export const IconWrapper =styled.div`
display: flex;
align-items: center;
width: 36px ;
height: 36px;
padding: 10px;
background: #f6f6f6;
border-radius: 6px;
margin: 0 20px 0 40px; 
`

IconWrapper.Title = styled.div`
  font-family: SFProDisplay;
  font-size: 16px;
  line-height: 19px;
  color: #2d3a45;
`;

export const activeStyle = {
  color: 'white',
  background: '#FCB600',
  padding: '10px 0',
  
};
