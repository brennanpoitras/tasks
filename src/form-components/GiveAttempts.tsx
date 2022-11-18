import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<string>("3");
    const [requested, setRequested] = useState<string>("3");

    function useAttempt(): void {
        const intAttemptsLeft = parseInt(attemptsLeft);
        setAttemptsLeft(String(intAttemptsLeft - 1));
    }

    function gain(): void {
        const intAttemptsLeft = parseInt(attemptsLeft);
        const intRequested = parseInt(requested);
        if (requested == "") {
            return;
        } else {
            setAttemptsLeft(String(intAttemptsLeft + intRequested));
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Left: {attemptsLeft}</div>
            <Form.Group controlId="formAnswer">
                <Form.Label>Request Number of Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequested(event.target.value)
                    }
                />
            </Form.Group>
            <Button
                disabled={attemptsLeft === "0"}
                onClick={() => useAttempt()}
            >
                use
            </Button>
            <Button onClick={() => gain()}>gain</Button>
        </div>
    );
}
