import styled from "styled-components";

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
