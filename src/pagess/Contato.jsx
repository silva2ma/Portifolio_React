import Menu from "./Menu";
import styled from "styled-components";

const placeholders = ["Digite seu nome", "Digite seu e-mail", "Digite sua mensagem"];

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
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  color: white;
  max-width: 500px;
  padding: 10px;

  h1 {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 10px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  padding: 12px;
  width: 250px;
  font-size: 14px;
  background-color: white; /* Garantir que o fundo seja branco */
  color: black; /* Cor do texto digitado */
  border-radius: 8px;
  box-sizing: border-box;

  ::placeholder {
    color: gray;
    font-style: italic;
    font-size: 16px;
    opacity: 0.8;
  }

  &:focus {
    border-color: orange; /* Highlight the input field when focused */
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #ff7f50;
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export default function Contato() {
  const handleClick = () => {
    alert("Botão clicado!");
  };

  return (
    <div>
      <Menu />
      <Container>Contato</Container>

      <ContentContainer>
        {/* Lado esquerdo - Texto e Ícones */}
        <TextContainer>
          <h1>Tem uma pergunta ou proposta? Me envie uma mensagem!</h1>
          <SocialIconsContainer>
            <a href="https://github.com/silva2ma" target="_blank" rel="noopener noreferrer">
              <img width="30" height="30" src="https://img.icons8.com/ios/50/FD7E14/github--v1.png" alt="github" />
            </a>
            <a href="mailto:ma.rodriguessilva1996@gmail.com">
              <img width="30" height="30" src="https://img.icons8.com/ios/50/FD7E14/gmail-new.png" alt="gmail" />
            </a>
            <a href="https://wa.me/5511949596410">
              <img width="30" height="30" src="https://img.icons8.com/ios/50/FD7E14/whatsapp--v1.png" alt="whatsapp" />
            </a>
            <a href="https://www.linkedin.com/in/marcellarodriguess/">
              <img width="30" height="30" src="https://img.icons8.com/ios/50/FD7E14/linkedin.png" alt="linkedin" />
            </a>
            <a href="https://www.instagram.com/rodriguesmrcll._">
              <img width="30" height="30" src="https://img.icons8.com/ios/50/FD7E14/instagram-new--v1.png" alt="instagram" />
            </a>
          </SocialIconsContainer>
          <p style={{ textAlign: "justify" }}>Estou sempre aberta a novas oportunidades e colaborações. Se você tiver alguma dúvida, sugestão ou interesse em trabalhar juntos, não hesite em me contatar! Fique à vontade para enviar uma mensagem ou me seguir nas redes sociais. Vamos conversar e transformar ideias em projetos incríveis!</p>
        </TextContainer>

        {/* Lado direito - Inputs e Botão */}
        <FormContainer>
          <p>Preencha com seus dados :</p>
          {placeholders.map((text, index) => (
            <Input key={index} type="text" placeholder={text} />
          ))}
          <Button onClick={handleClick}>Enviar</Button>
        </FormContainer>
      </ContentContainer>
    </div>
  );
}
