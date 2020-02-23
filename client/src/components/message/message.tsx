import React, { Component, FormEvent, ChangeEvent } from 'react';
import { Container, Form, ListGroup, ListGroupItem } from 'react-bootstrap';
import './message.css';
import configuration from '../../config';

type MyProps = {
}

type MyState = {
    textMessage?: string,
    messages: string[],
    validated: boolean,
    errors?: any
}

interface IMessage {
    message?: string
}

class Message extends Component<MyProps, MyState> {

    // Initialize the state
    constructor(props: MyProps) {
        super(props);
        this.state = {
            textMessage: undefined,
            messages: [],
            validated: false,
            errors: {
                textMessage: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        this.setState({ textMessage: event.target.value });
    }

    // send a message to the Express app
    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        event.preventDefault();

        if (form.checkValidity() === false) {
            console.log('form invalid...');
            event.stopPropagation();
            this.setState({
                validated: true
            });
        } else {
            const messageToSend: IMessage = { message: this.state.textMessage };
            const options = {
                method: 'POST',
                body: JSON.stringify(messageToSend),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            };

            fetch(configuration.apiMessages, options)
                .then(res => res.json())
                .then(response => {
                    let messagesSended: string[] = this.state.messages;
                    messagesSended.push(response.value);
                    this.setState({
                        messages: messagesSended,
                        validated: true
                    });
                });
        }
    }

    render() {
        const { messages } = this.state;

        return (
            <Container className="d-flex justify-content-between">
                <Form className="d-flex flex-column align-items-center form-container"
                    onSubmit={this.handleSubmit} noValidate validated={this.state.validated}>
                    <Form.Group controlId="formBasicMessage">
                        <Form.Control
                            className="input-message"
                            name="textMessage"
                            type="text"
                            value={this.state.textMessage || ''}
                            required
                            onChange={this.handleChange}
                            placeholder="Enter a message" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"> Please enter a message.</Form.Control.Feedback>
                    </Form.Group>
                    <button className="primary-button" type="submit">Send</button>
                </Form>
                {/* Check to see if any messages are found*/}
                {messages.length ? (
                    <div className="messages-container">
                        <h2>Sent messages 😎</h2>
                        <ListGroup>
                            {/* Render the list of messages */}
                            {messages.map((item, index) => {
                                return (
                                    <ListGroup.Item key={index}>{item}</ListGroup.Item>
                                );
                            })}
                        </ListGroup>
                    </div>

                ) : (
                        <div className="messages-container">
                            <h2>No messages found 😭</h2>
                        </div>
                    )
                }
            </Container>
        );
    }
}

export default Message;