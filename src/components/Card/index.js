import React from 'react';
import logo from '../../logo.png';
import { Container, Label } from './styles';

export default function Card(){
  return(
  <Container>
    <header>
      <Label color="#7159c1" />
    </header>
    <p>Fazer a migração completa de servidor</p>
    <img src={logo} alt="logo" />
  </Container>
  );
}