import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-edit-mode"
                label="Edit Mode?"
                checked={editMode}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setEditMode(event.target.checked)
                }
            />
            {editMode && (
                <div>
                    <Form.Group controlId="formAnswer">
                        <Form.Label>Enter Name:</Form.Label>
                        <Form.Control
                            type="textbox"
                            value={name}
                            disabled={editMode ? false : true}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setName(event.target.value)}
                        />
                    </Form.Group>
                </div>
            )}
            {editMode && (
                <div>
                    <Form.Check
                        type="checkbox"
                        id="is-student"
                        label="Student?"
                        checked={isStudent}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setIsStudent(event.target.checked)}
                    />
                </div>
            )}
            <div>
                {name} {isStudent ? "is a student" : "is not a student"}
            </div>
        </div>
    );
}
