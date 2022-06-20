import React from 'react'
import './Home.scss';
import Header from '../Header/Header'
import {Navbar, Container } from 'react-bootstrap';
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };


function Home() {
  return (
    <>
    <Header />
    <div>Home</div>
  <Navbar bg="dark" expand="sm" variant="black">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  </Container>
  </Navbar>
  <div>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />
    </div>
    </>
  )
}

export default Home