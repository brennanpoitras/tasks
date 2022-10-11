import React from "react";
import { Button, Row, Container, Col } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <header className="App-header">
                            COS420 with React Hooks and TypeScript
                        </header>
                        <h1> This is header text.</h1>
                        <img
                            src="computerart.jpg"
                            alt="A picture of a computer"
                        />
                        <div id="rectangle"></div>
                    </Col>
                    <Col>
                        <ol>
                            <li>first</li>
                            <li>second</li>
                            <li>third</li>
                        </ol>
                        <Button onClick={() => console.log("Hello World!")}>
                            aria-label=Log Hello World
                        </Button>
                        <p>
                            Edit <code>src/App.tsx</code> and save. Hello World
                        </p>
                        <div id="rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
