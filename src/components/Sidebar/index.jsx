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
import {Menu} from 'antd'
import { MenuItem } from "rc-menu";

const {SubMenu} =Menu;

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
        <Menu>
          <SubMenu>
        {sidebar.map(({ id, title, path, hidden, Icon }) => {
          return (
            <Menu.Item>
            <Item key={id}>
              <Link exact activeStyle={activeStyle} key={id} to={path}>
                <Icon className="icon" />
                {title}
              </Link>
            </Item>
            </Menu.Item>
          );
        })}
        </SubMenu>
        </Menu>
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
