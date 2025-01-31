import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }

    return (
        <>
            <div>
                <h3>Multiple Choice Question</h3>
            </div>
            <div>
                <Form.Group controlId="answerOptions">
                    <Form.Label>Pick Answer</Form.Label>
                    <Form.Select value={answer} onChange={updateAnswer}>
                        {options.map((choice: string) => (
                            <option key={choice} value={choice}>
                                {choice}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            <div>
                {answer === expectedAnswer ? <div>✔️</div> : <div>❌</div>}
            </div>
        </>
    );
}
