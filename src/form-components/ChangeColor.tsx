import React, { useState } from "react";
import { Form } from "react-bootstrap";
const colors = [
    "red",
    "blue",
    "yellow",
    "orange",
    "green",
    "purple",
    "black",
    "turquoise"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                <Form.Check
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-red"
                    label="Red"
                    value="Red"
                    checked={color === "Red"}
                    inline={true}
                />
            </div>
            <div>
                <Form.Check
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-blue"
                    label="Blue"
                    value="Blue"
                    checked={color === "Blue"}
                    inline={true}
                />
            </div>
            <div>
                <Form.Check
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-yellow"
                    label="Yellow"
                    value="Yellow"
                    checked={color === "Yellow"}
                    inline={true}
                />
            </div>
            <div>
                <Form.Check
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-orange"
                    label="Orange"
                    value="Orange"
                    checked={color === "Orange"}
                    inline={true}
                />
            </div>
            <div>
                <Form.Check
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-green"
                    label="Green"
                    value="Green"
                    checked={color === "Green"}
                    inline={true}
                />
            </div>
            <div>
                <Form.Check
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-purple"
                    label="Purple"
                    value="Purple"
                    checked={color === "Purple"}
                    inline={true}
                />
            </div>
            <div>
                <Form.Check
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-black"
                    label="Black"
                    value="Black"
                    checked={color === "Black"}
                    inline={true}
                />
            </div>
            <div>
                <Form.Check
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-turquoise"
                    label="Turquoise"
                    value="Turquoise"
                    checked={color === "Turquoise"}
                    inline={true}
                />
            </div>
            <div>You have chosen {color}</div>
        </div>
    );
}
