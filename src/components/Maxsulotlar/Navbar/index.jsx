import React from "react";
import './style.css'
import Dropdown from '../dropdown/Dropdown'
import user_image from '../../../assets/icons/Path.png'
import notifications from '../../../assets/JsonData/notification.json'
import {
  Container,
  Input,
  Plus,
  Link,
  Search,
  Tab,
  Title,
  Wrapper,
} from "./style";
// import { Link } from "react-router-dom";

const curr_user = {
  image: user_image
}
const renderUserToggle = (user) => (
  <div className="topnav__right-user">
      <div className="topnav__right-user__image">
          <img src={user.image} alt="" />
      </div>
      <div className="topnav__right-user__name">
          {user.display_name}
      </div>
  </div>
)
const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
      <i className={item.icon}></i>
      <span>{item.content}</span>
  </div>
)
export const Navbar = () => {
  return (
    <Container>
      <Wrapper align>
        <Plus />
        <Title>
          Yangi buyurma <br />
          qo'shish
        </Title>
      </Wrapper>
      <Wrapper last>
        <Tab>
          <Input placeholder="Qidirish"></Input>
          <Search />
        </Tab>
        
        <Dropdown 
         customToggle={() => renderUserToggle(curr_user)}
        renderFooter={() => <Link to='/'>View All</Link>}
        contentData={notifications}
        renderItems={(item, index,) => renderNotificationItem(item,index)}
       > </Dropdown>
        {/* <Menu /> */}
        
      </Wrapper>
    </Container>
  );
};

export default Navbar;
