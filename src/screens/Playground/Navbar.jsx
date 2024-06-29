import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const NavbarContainer = styled.div`
  height: ${({isFullScreen}) => isFullScreen ? '0' : '4.5rem'};
  background: #1e1e1e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: cursive;
`

const NavbarContent = styled.button`
  background: transparent;
  border: 0;

  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`

const Logo = styled.img`
  width: 60px;
`

const MainHeading = styled.h1`
    font-size: 3rem;
    font-weight: 400;
    color: #fff;
    margin-bottom: 0.75rem;

    span:first-child {
        font-weight: 500; /* reduced font weight from 700 to 500 */
        font-size: 3.5rem;
        color: gold;
        font-family:fantasy;
    }

    span:nth-child(2) {
        font-size: 2.5rem;
        font-weight: 400;
        color: #fff;
        font-family:fantasy;
    }

    span:nth-child(3) {
        font-weight: 500; /* reduced font weight from 700 to 500 */
        font-size: 3.5rem;
        color: gold;
        font-family:fantasy;
    }
    span:last-child {
        font-size: 2.5rem;
        font-weight: 400;
        color: #fff;
        font-family:fantasy;
    }
`

const Navbar = ({ isFullScreen }) => {
  const navigate = useNavigate()
  return (
    <NavbarContainer isFullScreen={isFullScreen}>
      <NavbarContent onClick={() => {
        navigate('/')
      }}>
        <Logo src={logo} />
        <MainHeading>
          <span style={{ fontWeight: '500',color:'gold'}}>L</span><span>ear</span><span style={{ fontWeight: '500', color: 'gold' }}>N</span> <span> Code</span>
        </MainHeading>
      </NavbarContent>
    </NavbarContainer>
  )
}

export default Navbar