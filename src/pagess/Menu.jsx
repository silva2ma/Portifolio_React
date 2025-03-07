import React from "react";
import Logo from "/Logo.png";



function Menu() {
  // Estilos em objetos JavaScript
  const menuStyle = {
    textAlign: "center",
    padding: "20px 0",
  };

  const logoStyle = {
    width: "150px",
    display: "block",
    margin: "0 auto",
  };

  const linkStyle = {
    color: "orange",
    textDecoration: "none",
    fontSize: "18px",
    margin: "0 15px",
  };

  const linkHoverStyle = {
    color: "blue", // Cor do link quando passar o mouse
  };

  return (
    <div style={menuStyle}>
      <a href="/">
        <img src={Logo} alt="Logo" style={logoStyle} />
      </a>
      <div>
        <a href="/" style={linkStyle}>Home</a>
        <a href="/sobre" style={linkStyle}>Sobre</a>
        <a href="/projetos" style={linkStyle}>Projetos</a>
        <a href="/contato" style={linkStyle}>Contato</a>
      </div>
    </div>
  );
}

export default Menu;
