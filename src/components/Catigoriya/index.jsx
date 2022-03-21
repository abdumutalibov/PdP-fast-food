import React from 'react'
import Body from './body';
import Navbar from './Navbar';
import './style'
import { Container } from './style';
import Topbar from './Topbar';
import { KategoriyaContext } from '../../context/Kategoriya/kategoriya';
export const Categoriya = () => {
const [kategoriya] = KategoriyaContext();
console.log(kategoriya);
    return (
        <Container>
            <Navbar/>
            <Topbar/>
{kategoriya.map((value) => (

            <Body key={value.id} value={value}/>
))}
        </Container>
    )
}
export default Categoriya; 