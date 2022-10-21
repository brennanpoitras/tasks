import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [inProg, setInProg] = useState<boolean>(false);

    function switchProg(): void {
        setInProg(!inProg);
    }

    function incAttempt(): void {
        setAttempt(attempt + 1);
    }

    function decAttempt(): void {
        setAttempt(attempt - 1);
    }

    function startQuiz(): void {
        switchProg();
        decAttempt();
    }

    function stopQuiz(): void {
        switchProg();
    }

    return (
        <div>
            <div>
                <Button disabled={!inProg} onClick={stopQuiz}>
                    Stop Quiz
                </Button>
            </div>

            <div>
                <Button disabled={inProg || attempt < 1} onClick={startQuiz}>
                    Start Quiz
                </Button>
                <Button disabled={inProg} onClick={incAttempt}>
                    Mulligan
                </Button>
            </div>
            <div>Attempts Left: {attempt}</div>
        </div>
    );
}
