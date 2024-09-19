import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import CardList from "./components/CardList";
import { item } from "./data";
import { useState } from "react";

function App() {
  const [itemData,setItemData]= useState(item)


  return (
    <div className="color_body">
      <NavBar />
      <Container>
        <Header />
        <Category/>
        <CardList itemData={itemData}/>
      </Container>
    </div>
  );
}

export default App;
