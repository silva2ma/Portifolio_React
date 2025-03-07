import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import minhaImagem from './assets/FotoHome.png';
import { FaSun, FaMoon } from 'react-icons/fa'; // Importando ícones de sol e lua

function Home() {
  const [theme, setTheme] = useState('light');

  // Alterando o atributo 'data-theme' quando o tema mudar
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '100px',
      flexWrap: 'wrap',
      textAlign: 'left',
      padding: '20px',
      backgroundColor: 'var(--background-color)',
      color: 'var(--text-color)',
    },
    textContainer: {
      maxWidth: '700px',
    },
    image: {
      width: '450px',
      height: 'auto',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: 'var(--button-background)',
      color: 'var(--text-color)',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: 'var(--button-hover-background)',
    },
    themeToggle: {
      fontSize: '24px',
      cursor: 'pointer',
      background: 'transparent',
      border: 'none',
      color: 'var(--text-color)',
      padding: '10px',
      transition: 'color 0.3s',
    },
  };

  const handleClick = () => {
    alert('Você clicou no botão! Bem-vindo!');
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <Menu />
      
      <div style={styles.container}>
        <div style={styles.textContainer}>
              <div>
            {/* Adicionando o ícone de alternância de tema */}
            <button
              style={styles.themeToggle}
              onClick={toggleTheme}
            >
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
          </div>
          <h1>
            Olá, bem-vindo ao mundo da <span style={{ color: 'orange' }}>Marcella</span>
          </h1>
          <h3>Desenvolvendo ideias, construindo experiências.</h3>
          <p style={{ textAlign: 'justify' }}>
            Aqui você encontrará um portfólio de projetos desenvolvidos com dedicação e inovação, focados em
            proporcionar experiências únicas e memoráveis.
            <br />
            Acredito que a <span style={{ color: 'coral' }}>tecnologia</span> tem o poder de transformar realidades,
            e meu objetivo é criar soluções que não só atendem às necessidades dos usuários, mas que também
            inspiram e estimulam <span style={{ color: 'coral' }}>mudanças positivas</span>.
            <br />
            Vamos juntos explorar o futuro da tecnologia e da inovação!
          </p>
          <button
            style={styles.button}
            onClick={handleClick}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Venha me conhecer
          </button>
          <br />
      
        </div>
        <img src={minhaImagem} alt="Imagem ilustrativa" style={styles.image} />
      </div>
    </div>
  );
}

export default Home;
