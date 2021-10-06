import React from 'react'
import './style'
import Sidebar from '../components/Sidebar';
import { Body, Container,  } from './style';
export const Root = () => {
    return (
        <Container>

       <Sidebar/>
            <Body>Im body</Body>
        
        </Container>
    )
}
export default Root;