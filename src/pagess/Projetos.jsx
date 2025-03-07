import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import styled from "styled-components";
import minhaImagem from "/Logo.png"; // Importando a imagem

const Container = styled.div`
  background: linear-gradient(to left, white, coral, gray);
  padding: 14px;
  font-size: 30px;
  color: white;
  text-align: center;
  border-radius: 19px;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 10px 20px 5px;
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const ContainerProjects = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que os itens se ajustem em várias linhas em telas menores */
  justify-content: space-between; /* Alinha os itens ao longo do eixo principal */
  gap: 30px; /* Espaçamento entre as colunas */
  padding: 10px 20px 5px;
  text-align: left;
  max-width: 1200px;
  margin: 10px;
  margin-bottom: 20px;
  border-radius: 19px;
`;

const ProjectColumn = styled.div`
  flex: 1; /* Cada coluna vai ocupar um espaço proporcional */
  min-width: 280px; /* Evita que a coluna fique muito pequena em telas pequenas */
  display: flex;
  flex-direction: column; /* Os itens dentro dessa coluna ficam em uma linha (vertical) */
  gap: 15px; /* Espaçamento entre os itens dentro da coluna */
`;

const Titulo = styled.h2`
  margin-bottom: 15px; /* Margem inferior para dar um espaçamento do título */
  text-align: center;
`;

const Image = styled.img`
  width: 100%; /* Ajusta a imagem para ocupar toda a largura da coluna */
  height: auto;
  border-radius: 10px; /* Adiciona borda arredondada nas imagens */
`;

const ProjectDescription = styled.div`
  max-width: 1200px;
  border-radius: 19px;
  background-color: gray;
  margin: 20px;
  padding: 20px;
`;

const Button = styled.button`
 
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
   
  }
`;

function Projetos() {
  // Definindo o estado para controlar a imagem atual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array de imagens para o carrossel
  const images = [
    '/gp.png',
    '/site.png',
    '/cel.png'
  ];

  // Função para mudar para a próxima imagem
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Função para voltar para a imagem anterior
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  // Adicionando o autoplay
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Troca de imagem a cada 3 segundos
    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, [currentImageIndex]);

  const handleViewProject = () => {
    // Aqui você pode definir para onde o botão irá redirecionar. Por enquanto, vamos apenas mostrar um alerta
    alert("Redirecionando para os detalhes do projeto...");
  };

  return (
    <div>
      <Menu />
      <Container>Meus projetos</Container>
      <ContentContainer>
        <h2>Desenvolvo soluções tecnológicas que transformam ideias em inovação</h2>
      </ContentContainer>
      <ContainerProjects>
        <ProjectColumn>
          <Titulo>Projeto "VivaBem"</Titulo>
          <Image src={images[currentImageIndex]} alt="Imagem ilustrativa do projeto Viva Bem" />
          <div style={{ textAlign: 'center' }}>
            <p>Link para o projeto:</p>
            <a href="https://github.com/silva2ma/Projeto_VivaBem" target="_blank" rel="noopener noreferrer">
              <img width="50" height="50" src="https://img.icons8.com/ios/50/FD7E14/github--v1.png" alt="github" />
            </a>
      </div>
        </ProjectColumn>
        <ProjectColumn>
          <ProjectDescription>
            <p><strong>Data de Conclusão:</strong> [11/2024]</p>
            <h3>Descrição</h3>
            <p>O Projeto Viva Bem é uma iniciativa dedicada à inclusão e ao bem-estar da população idosa. Desenvolvemos uma plataforma digital composta por um aplicativo mobile e um website, com o objetivo de promover atividades de lazer, notícias e dicas sobre qualidade de vida para os idosos.</p>

            <h3>Objetivos:</h3>
            <ul>
              <li>Promoção do entretenimento e bem-estar.</li>
              <li>Práticas inclusivas.</li>
              <li>Envelhecimento ativo e dignidade.</li>
              <li>Apoio à doações e ações sociais.</li>
            </ul>

            <h3>Tecnologias Usadas:</h3>
            <ul>
              <li>HTML, JavaScript, CSS, Java</li>
            </ul>

            <h3>Desafios e Soluções:</h3>
            <p>Durante o desenvolvimento do projeto, um dos principais desafios foi garantir que a interface fosse simples e intuitiva para os idosos, que podem não ter familiaridade com tecnologias mais modernas.</p>

            <h3>Funcionalidades:</h3>
            <ul>
              <li>Atividades de lazer: Jogos, exercícios físicos adaptados, e dicas culturais.</li>
              <li>Notícias: Atualizações sobre saúde e nutrição.</li>
              <li>Dicas de qualidade de vida.</li>
            </ul>
          </ProjectDescription>
        </ProjectColumn>
      </ContainerProjects>

      {/* Botão abaixo do carrossel para ver o projeto */}
     
    </div>
  );
}

export default Projetos;
