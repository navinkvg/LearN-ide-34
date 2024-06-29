import React, { useContext } from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { ModalContext } from '../../context/ModalContext'

const StyledLeftComponent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background-color: #1e1e1e;
    display: flex;
    flex-direction: column; /* Add this line */
    justify-content: center; /* Add this line */
    align-items: center; /* Add this line */

    @media (max-width: 768px){
        position: relative;
        width: 100%;
    }
`

const ContentContainer = styled.div`
    text-align: center;
    display: flex; /* Add this line */
    flex-direction: column; /* Add this line */
    align-items: center; /* Add this line */
`

const Logo = styled.img`
    width: 165px;
    margin-bottom: 1rem;
    align-self: center; /* Add this line */
`

const MainHeading = styled.h1`
    font-size: 3rem;
    font-weight: 400;
    color: #fff;
    margin-bottom: 0.75rem;
    text-align: center; /* Add this line */

    span:first-child {
        font-weight: 500;
        font-size: 3.5rem;
        color: gold;
        font-family: fantasy;
    }

    span:nth-child(2) {
        font-size: 2.5rem;
        font-weight: 400;
        color: #fff;
        font-family: fantasy;
    }

    span:nth-child(3) {
        font-weight: 500;
        font-size: 3.5rem;
        color: gold;
        font-family: fantasy;
    }

    span:last-child {
        font-size: 2.5rem;
        font-weight: 400;
        color: #fff;
        font-family: fantasy;
    }
`

const SubHeading = styled.div`
    font-size: 1.5rem;
    color: #39FF14;
    opacity: 0.7;
    margin-bottom: 1.5rem;
    text-align: center; /* Add this line */
    text-shadow: 0 0 10px #39FF14;
`

const AddNewButton = styled.button`
    padding: 0.25rem 1.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 30px;
    box-shadow: 0px 0px 4px 2px #8b8b8b;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    transition: all 0.2s ease-in-out;
    span{
        font-size: 2rem;
        font-weight: 700;
    }

    &:hover{
        cursor: pointer;
        scale: 1.05;
        box-shadow: 0px 0px 6px 2px #8b8b8b;
    }
`

const Footer = styled.p`
    position: absolute;
    bottom: 2%;
    font-size: 15px;
    left: 0;
    width: 100%;
    text-align: center; /* Add this line */
    color: #fff;
    text-shadow: 0 0 10px #fff;
`

const LeftComponent = () => {
    const { openModal } = useContext(ModalContext);
    return (
        <StyledLeftComponent>
            <ContentContainer>
                <Logo src={logo} alt="" />
                <MainHeading><span style={{ fontWeight: '500',color:'gold'}}>L</span><span>ear</span><span style={{ fontWeight: '500', color: 'gold' }}>N</span> <span> Code</span></MainHeading>
                <SubHeading>&lt; Eat-Sleep-Code-Repeat &gt;</SubHeading>
                <AddNewButton onClick={() => openModal({
                    show: true,
                    modalType: 3,
                    identifiers: {
                        folderId: "",
                        cardId: "",
                    }
                })} ><span>+</span> Create New Playground</AddNewButton>
            </ContentContainer>
            <Footer>&#169; Lohith & Navin | Rights Reserved 2024</Footer>
        </StyledLeftComponent>
    )
}

export default LeftComponent