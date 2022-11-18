import React, { useState } from "react";
import { Form, FormCheck } from "react-bootstrap";
const COLORS = [
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
    const [currentColor, setCurrentColor] = useState<string>("");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrentColor(event.target.value);
    }

    function SelectedColor(): JSX.Element {
        return (
            <div>
                You have chosen{" "}
                <div
                    data-testid="colored-box"
                    style={{ backgroundColor: currentColor }}
                >
                    {currentColor}
                </div>
            </div>
        );
    }
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                <Form.Group controlId="favoriteColors">
                    {COLORS.map((color: string) => (
                        <FormCheck
                            key={color}
                            type="radio"
                            name="color"
                            onChange={updateColor}
                            id="color-check-color"
                            label={color}
                            value={color}
                            checked={currentColor === color}
                            inline={true}
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </Form.Group>
            </div>
            <div>
                <SelectedColor></SelectedColor>
            </div>
        </div>
    );
}
