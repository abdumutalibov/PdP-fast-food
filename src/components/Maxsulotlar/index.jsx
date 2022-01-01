import React from 'react'
import Navbar from './Navbar'
import Body from './body'
import { Container } from './style'
import { maxsulotlar } from '../../mock/card'
import Top from './Top'
export const Maxsulotlar = ({location}) => {
    return (
        <Container>
        <Navbar/>
        <Top/>
{maxsulotlar.map((value)=>(

        <Body key={value.id} value={value}/>
))}
        </Container>
    )
}
export default Maxsulotlar;