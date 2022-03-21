import styled from "styled-components";

import { ReactComponent as done } from "../../../assets/icons/done.svg";

export const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  min-width: 50px;
  min-height: 50px;
  background: #edeff3;
  border-radius: 50%;
  cursor: pointer;
`;
export const Done = styled(done)`
  width: 44px;
  height: 44px;
  padding: 10px;
  margin: 5px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 20px;
`;
