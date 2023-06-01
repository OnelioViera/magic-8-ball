import React, { useState } from "react";
import "./EightBall.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import defaultAnswers from "./answers.json";
import { choice } from "./Random";
import { Button } from "react-bootstrap";

function EightBall({ answers = defaultAnswers }) {
    const [answer, setAnswer] = useState({
        msg: "magic 8 ball",
        color: "black",
    });

    /** Restart game over button */
    const handleRestart = () => {
        setAnswer({
            msg: "magic 8 ball",
            color: "black",
        });
    }

    /** Eight ball answers */
    function handleClick(evt) {
        setAnswer(choice(answers));
    }

    return (
        <Container fuild='md'>
            <Row className="justify-content-md-center">
                <Col md='auto'>
                    <div className="EightBall" onClick={handleClick} style={{ backgroundColor: answer.color }}>
                        <b>{answer.msg}</b>
                    </div>
                    <Button onClick={handleRestart} variant="dark">Start Over</Button>
                </Col >
            </Row >
        </Container >
    );
}

export default EightBall;
