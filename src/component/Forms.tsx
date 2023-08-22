import {Button, Col, Form, FormGroup, FormText, Input, Label} from "reactstrap";
import {Link} from "react-router-dom";
import {Editor} from "primereact/editor";
import React from "react";

export const Forms = ({name, link, inputs, status, functions}) => {
    // return Component
    return (
        <div className={"mt-5 container p-4 border"} style={{background: 'white', width: '96%'}}>
            <h4 className={"text-success mb-4"}>{name}</h4>
            <Form>
                {inputs.map(item => (
                    <FormGroup row>
                        <Label
                            for={item.name}
                            sm={2}
                        >
                            {item.name}
                        </Label>
                        <Col sm={10}>
                            {item.type === "editor" ? (
                                <Editor style={{height: '320px'}} value={item.value}
                                        onTextChange={(e) => item.setValue(e.htmlValue)}/>
                            ) : item.type === "select" ? (
                                <select className={"form-control"} id={item.name}
                                        name={item.name} value={item.value}
                                        onChange={e => item.setValue(e.target.value)}>
                                    <option value="0">{item.placeholder}</option>
                                    {item.arr.map(arr => (
                                        <option value={arr.name}>{arr.name}</option>
                                    ))}
                                </select>
                            ) : (
                                <Input
                                    value={item.value}
                                    onChange={e => item.setValue(e.target.value)}
                                    id={item.name}
                                    name={item.name}
                                    placeholder={item.placeholder}
                                    type={item.type}
                                />
                            )}
                        </Col>
                    </FormGroup>
                ))}
                <FormGroup>
                    <Col>
                        <Button color={"primary"} onClick={() => functions()} className={"m-3 mt-0 mb-0"}>
                            Saqlash
                        </Button>
                        <Link to={link} className={"btn btn-danger m-3 mt-0 mb-0"}>Orqaga</Link>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}