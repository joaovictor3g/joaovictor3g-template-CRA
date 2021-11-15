import { Container, Footer, Main } from "./styles";

export function Home() {
  return (
    <Container>
      <Main>
        <h1>
          Template made to fast up the development experience with React.js
        </h1>
      </Main>

      <Footer>
        <span>
          Made by <a href="https://github.com/joaovictor3g">joaovictor3g</a>
        </span>
      </Footer>
    </Container>
  );
}
