import React, {useState} from 'react'
import { Container, IconsWrapper, MenuH, MenuV, Plus, Tab, Title, Toggle, Wrapper } from './style'

const Navbar = () => {

    const [isActive , setIsActive] = useState('Yangi')
    const [isTabActive , setIsTabActive] = useState(true)

    return (

        <Container>
            <Wrapper align>
                <Plus/>
                <Title>Yangi buyurma qo'shish</Title>
            </Wrapper>
            <Wrapper>
                <Tab>
                    <Tab.Item onClick={()=>setIsActive('Yangi')} active={isActive=== 'Yangi'}>Yangi</Tab.Item>
                    <Tab.Item onClick={()=>setIsActive('Qabul qilgan')} active={isActive=== 'Qabul qilgan'}>Qabul qilingan</Tab.Item>
                    <Tab.Item onClick={()=>setIsActive('Jonatilgan')} active={isActive=== 'Jonatilgan'}>Jonatilgan </Tab.Item>
                    <Tab.Item onClick={()=>setIsActive('Yopilgan')} active={isActive=== 'Yopilgan'}>Yopilgan</Tab.Item>
                </Tab>
            </Wrapper> 
            <Wrapper align>
                <Toggle>
                    <IconsWrapper
                    active={!isActive}  
                    onClick={()=> setIsActive(false)}>
                        <MenuV/>
                        </IconsWrapper>
                    <IconsWrapper 
                    active={isActive}  
                    onClick={()=> setIsActive(true )}> <MenuH/></IconsWrapper>
                    
                   
                </Toggle>
            </Wrapper>
        </Container>
    )
}

export default Navbar
