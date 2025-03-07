import Menu from "./Menu";
import minhaImagem from "./assets/FotoSobre.png"; // Importando a imagem
import styled from "styled-components";

// Estilos para o container principal
const Container = styled.div`
  background: linear-gradient(to left, white, coral, gray);
  padding: 14px;
  font-size: 30px;
  color: white;
  text-align: center;
  border-radius: 19px;

  @media (max-width: 768px) {
    font-size: 24px;
    padding: 10px;
  }
`;

// Estilos para o conteúdo, colocando texto e imagem lado a lado
const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 10px 20px 5px;
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
  border-bottom: 2px solid white;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

// Estilo para a imagem
const Image = styled.img`
  width: 600px;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
  }
`;

// Estilo para o texto
const TextContainer = styled.div`
  max-width: 600px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
  }
`;

// Estilo para o container das colunas de habilidades
const CContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 90px 20px;
  border-bottom: 2px solid white;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    padding: 50px 20px;
  }
`;

// Estilo para as colunas (Hard Skills e Soft Skills)
const Column = styled.div`
  flex: 1;
  padding: 10px;
  color: white;
  text-align: left;

  h2 {
    margin-bottom: 10px;
  }

  h4 {
    margin-bottom: 10px;
    color: coral;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  ul li {
    margin: 5px 0;
  }

  &:not(:last-child) {
    border-right: 2px solid white;
  }

  @media (max-width: 768px) {
    border-right: none;
    text-align: center;
  }
`;

function Sobre() {
  return (
    <div>
      <Menu />
      <Container>Um pouco sobre mim ... </Container>
      <ContentContainer>
        <TextContainer>
          <h1>
            E aí! Sou a <span style={{ color: "orange" }}>Marcella</span>, uma
            entusiasta da tecnologia e do design
          </h1>
          <h3>
            <span style={{ color: "coral", fontSize: "29px" }}>Meu objetivo? </span>
            Desenvolver experiências digitais que unam estética e
            funcionalidade.
          </h3>
          <p>
            ✔ Desenvolver interfaces intuitivas e otimizadas <br />
            ✔ Programação, design, UX/UI e acessibilidade
          </p>
        </TextContainer>
        <Image src={minhaImagem} alt="Imagem ilustrativa" />
      </ContentContainer>
      <CContainer>
        {/* Coluna de Hard Skills */}
        <Column>
          <h2>Hard Skills</h2>
          <h4>Habilidades técnicas</h4>
          <ul>
            <li>Linguagens de Programação: HTML, CSS, JavaScript;</li>
            <li>Frameworks e Bibliotecas: React, Vue.js;</li>
            <li>Banco de Dados: MySQL;</li>
            <li>Ferramentas e Versionamento: Git, GitHub, Figma;</li>
            <li>Metodologias: Agile, Scrum, UX/UI Design.</li>
          </ul>
        </Column>

        {/* Coluna de Soft Skills */}
        <Column>
          <h2>Soft Skills</h2>
          <h4>Competências pessoais</h4>
          <ul>
            <li>Resolução de problemas – Capacidade de encontrar soluções eficientes;</li>
            <li>Trabalho em equipe – Boa comunicação e colaboração em projetos;</li>
            <li>Criatividade – Capacidade de pensar fora da caixa para soluções inovadoras;</li>
            <li>Autodidatismo – Sempre buscando aprender e evoluir;</li>
            <li>Gerenciamento de tempo – Organização para cumprir prazos e metas.</li>
          </ul>
        </Column>
      </CContainer>
    </div>
  );
}

export default Sobre;
