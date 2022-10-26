import React from "react";
import { Button, Row, Container, Col } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <hr></hr>
            {<DoubleHalf></DoubleHalf>}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
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
