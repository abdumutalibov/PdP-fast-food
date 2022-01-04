import styled from "styled-components";
import { ReactComponent as menu } from "../../../assets/icons/menu.svg";
import { ReactComponent as x } from "../../../assets/icons/x2.svg";

export const Dropdown = styled.div``;
export const Path = styled(menu)`
  width: 30px;
  height: 30px;
  padding: 3px;
  cursor: pointer;
  :hover {
    background: #e5e5e5;
  }
`;
// export const MainMenu = styled.div`
//   position: fixed;
//   right: 00px;
//   top: 0;
//   width: 300px;
//   height: 100vh;
//   padding: 20px;
//   z-index: 99;
//   background-color: white;
//   box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
//   transition: right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
// :active{
//     right: 0;
// }
// `;

export const Menu_Close = styled.div`
  position: absolute;
  top: 90px;
  right: 400px;
  background-color: transparent;
  /* font-size: 1.5rem; */
`;
export const Container = styled.div`
  padding: 30px 0 30px 30px;
`;


export const H4 = styled.div`
  /* margin-top: 30px; */
  font-size: 20px;
`;
export const X = styled(x)`
  width: 60px;
  height: 50px;
  padding: 10px;
  margin-left: auto;
  background: white;
  border-radius: 20px 0px 0px 20px;
  /* border-radius: 25px; */
  /* border: 7px solid #e5e5e5; */
  cursor: pointer;
`;
export const UpdataItem = styled.div`
   display: flex;
    flex-direction: column;
    margin-top: 30px;
`
export const Label =styled.label`
 margin-bottom: 5px;
    font-size: 14px;
    font-family: SFProDisplay;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */

letter-spacing: 0.4px;

color: #2D3A45;

mix-blend-mode: normal;
opacity: 0.6;
`
export const UpdataInput =styled.input`
 /* border: none; */
    width: 250px;
    height: 30px;
    padding:20px;
    border-radius:6px;
    border: 1px solid gray;
`
export const AddProduct = styled.div`
width: 250px;
display: flex;
    margin-top: 30px;
flex-direction: column;
`
export const Select =styled.select`
     width: 250px;
    /* height: 30px; */
    padding:12px;
    border-radius:6px;
    border: 1px solid gray;
`
export const Option = styled.option`

`
