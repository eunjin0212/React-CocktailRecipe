import styled from 'styled-components'
import '../css/font.scss'
import React from 'react'

const Header = () => <HeaderDiv>My Cocktail Recipe</HeaderDiv>
export default Header

const HeaderDiv = styled.div`
  text-align: center;
  color: white;
  font-size: 80px;
  margin: 50px 0px 80px 0px;
  font-weight: 900;
  text-shadow: #76ff03 1px 1px 20px;
  font-family: "Yellowtail", cursive;
  width: 100%;
`
