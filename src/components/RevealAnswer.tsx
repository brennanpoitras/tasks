import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisibile] = useState<boolean>(false);

    function switchVis(): void {
        setVisibile(!visible);
    }

    return (
        <div>
            <Button onClick={switchVis}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}
