import React, { useState } from 'react'
import Body from './body';
import Navbar from './Navbar';
import './style'
import { Container } from './style';
import Topbar from './Topbar';
import { KategoriyaContext } from '../../context/Kategoriya/kategoriya';
import MenuNew from './Menu copy/Menu';
import SideMenu from './SideMenu/SideMenu';
import Background from './Background/Background'
export const Categoriya = () => {
const [kategoriya] = KategoriyaContext();
const [sideMenuOpen, setMenuState] = useState(false);
    
const menuToggleClickHandler = () => {
  setMenuState(!sideMenuOpen)
};

const backStateClickHandler = () => {
  setMenuState(false)
}

    return (
        <Container>
            <Navbar/>
            <Topbar/>

            <MenuNew clickHandler={menuToggleClickHandler}/>
        {sideMenuOpen ? <Background click={backStateClickHandler}/> : ''}
        <SideMenu show={sideMenuOpen} remove={backStateClickHandler}/>
{kategoriya.map((value) => (

            <Body key={value.id} value={value}/>
))}
        </Container>
    )
}
export default Categoriya; 