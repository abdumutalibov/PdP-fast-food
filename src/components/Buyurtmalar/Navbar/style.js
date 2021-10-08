import styled from "styled-components";
import { ReactComponent as plus } from "../../../assets/icons/plus.svg";
export const Container = styled.div`
  display: flex;
`;
export const Wrapper = styled.div`
  display: flex;
  height: 80px;
  padding: 22px 40px;
  align-items: ${({ align }) => align && "center"};
  background: white;
  width: ${({ align }) => (align ? "300px" : "100%")};
  border: 2px solid #e5e5e5;
`;
export const Plus = styled(plus)`
  padding: 11px;
  background: #20d472;
  width: 36px;
  height: 36px;
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
export const Tab = styled.div``;
