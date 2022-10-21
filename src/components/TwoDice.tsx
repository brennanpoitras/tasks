import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [d1, setD1] = useState<number>(1);
    const [d2, setD2] = useState<number>(1);

    function initialSetup(): void {
        const x = d6();
        setD1(x);
        let y = d6();
        while (y == x) {
            y = d6();
        }
        setD1(y);
    }

    function setdice1(): void {
        setD1(d6());
    }

    function setdice2(): void {
        setD2(d6());
    }

    return (
        <div>
        <div>
            Value of first dice is: <span data-testid="left-die">{d1}</span>
        </div>
        <div>
                Value of second dice is: <span data-testid="right-die">{d2}</span>
        </div>
        <Button onClick={setdice1}>Roll Left</Button>
        <Button onClick={setdice2}>Roll Right</Button>
        {d1 == d2 && d1 != 1 && <div>You Win</div>}
        {d1 == d2 && d1 == 1 && <div>You Lose</div>}
        Two Dice</div>);
}
