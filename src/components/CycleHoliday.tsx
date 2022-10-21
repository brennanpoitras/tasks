import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const christmas = "🎁";
    const thanksgiving = "🦃";
    const easter = "🐇";
    const independence = "🎆";
    const halloween = "🎃";

    const [holiday, setHoliday] = useState<string>(christmas);

    function nextInYear(): void {
        if (holiday == christmas) {
            setHoliday(easter);
        }
        if (holiday == easter) {
            setHoliday(independence);
        }
        if (holiday == independence) {
            setHoliday(halloween);
        }
        if (holiday == halloween) {
            setHoliday(thanksgiving);
        }
        if (holiday == thanksgiving) {
            setHoliday(christmas);
        }
    }

    function nextAlphabet(): void {
        if (holiday == christmas) {
            setHoliday(easter);
        }
        if (holiday == easter) {
            setHoliday(halloween);
        }
        if (holiday == halloween) {
            setHoliday(independence);
        }
        if (holiday == independence) {
            setHoliday(thanksgiving);
        }
        if (holiday == thanksgiving) {
            setHoliday(christmas);
        }
    }

    return (
        <div>
            <Button onClick={nextAlphabet}>Advance in Alphabet</Button>
            <Button onClick={nextInYear}>Advance in Year</Button>
            <div>Holiday: {holiday} </div>
        </div>
    );
}
