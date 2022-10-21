import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [qType, setType] = useState<QuestionType>("short_answer_question");

    function switchType(): void {
        if (qType == "short_answer_question") {
            setType("multiple_choice_question");
        } else {
            setType("short_answer_question");
        }
    }

    return (
        <div>
            <Button onClick={switchType}>Change Type</Button>
            {qType == "multiple_choice_question" && <div>Multiple Choice</div>}
            {qType == "short_answer_question" && <div>Short Answer</div>}
        </div>
    );
}
