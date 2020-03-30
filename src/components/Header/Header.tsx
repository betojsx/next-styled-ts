import React from 'react';
import SHeader, { SNav, SLogo } from './Header.styled';

export default function Header() {
  return (
    <SHeader>
      <SLogo src="/static/images/logo-marcas.png" />
      <SNav>
        <a href="#">Início</a>
        <a href="#">Como participar</a>
        <a href="#">Participe</a>
        <a href="#">Prêmios</a>
        <a href="#">Produtos</a>
        <a href="#">Loja bk participantes</a>
        <a href="#">Regulamento</a>
        <a href="#">Dúvidas</a>
        <a href="#" className="last">
          Faça seu login
        </a>
      </SNav>
    </SHeader>
  );
}
