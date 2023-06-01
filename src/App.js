import React from "react";
import "./App.css";
import EightBall from "./EightBall";
import './EightBall.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

/** Magic 8 Ball Fortune Teller */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <h1 className="GameTitle">Magic 8 Ball Fortune Teller</h1>
          <p className="GameText">
            Think of a yes or no question and click on the Magic 8 Ball to find out the answer.
          </p>
          <EightBall className="EightBall" />
        </Container >
      </header>
    </div>
  );
}

export default App;
