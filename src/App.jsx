import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import CardList from "./components/CardList";

function App() {
  return (
    <div className="color_body">
      <NavBar />
      <Container>
        <Header />
        <Category/>
        <CardList/>
        <CardList/>
        <CardList/>
      </Container>
    </div>
  );
}

export default App;
