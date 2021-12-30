import React from "react";
import logo from "../../assets/imgs/logo.png";
import {
  activeStyle,
  Container,
  IconWrapper,
  Item,
  Link,
  LogoWrapper,
  Text,
  Wrapper,
} from "./style";
import { sidebar } from "../../utils/sidebar";
import { ReactComponent as Chiqish } from "../../assets/icons/logout.svg";

export const Sidebar = () => {
  return (
    <Container>
      <LogoWrapper>
        <LogoWrapper.Img src={logo} alt="logo" />
        <Text>
          <Text.Title>Fast Food</Text.Title>
          <Text.Desc>Online Maxsulot sotuvi</Text.Desc>
        </Text>
      </LogoWrapper>
      <Wrapper>
        {sidebar.map(({ id, title, path, hidden, Icon }) => {
          return (
            <Item key={id}>
              <Link exact activeStyle={activeStyle} key={id} to={path}>
                <Icon className="icon" />
                {title}
              </Link>
            </Item>
          );
        })}
      </Wrapper>
      <Wrapper chiqish>
        <IconWrapper>
          <Chiqish exact activeStyle={activeStyle}  />
        </IconWrapper>
      <Link to='/'>

      <IconWrapper.Title>Chiqish</IconWrapper.Title>
      </Link>  
      
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
