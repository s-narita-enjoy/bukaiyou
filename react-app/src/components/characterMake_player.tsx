import "../characterMake.css"
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, CardBody } from 'react-bootstrap';

interface CharacterMakeProps {
    onCalculate: (result: number | string) => void;
}

const CharacterMake_player: React.FC<CharacterMakeProps> = (onCaliculate) => {
    const [playerName, setPlayerName] = useState<string | ''>('');
    const [useExp, setUseExp] = useState<number | ''>('');
    const [totalExp, setTotalExp] = useState<number | ''>('');
    const [restExp, setRestExp] = useState<number | ''>('');
    const [chalacterData, setChalacterData] = useState({});

    return (
        <Container className="mt-5" style={{ display: 'flex', justifyContent: 'flex-start', width: '60rem' }}>
            <Form>
                <Form.Group className='form'>
                    <Form.Label>プレイヤー名</Form.Label>
                     <Form.Control
                                                value={playerName}
                                                onChange={(e) => setPlayerName(e.target.value)}
                                                ></Form.Control>
                </Form.Group>
                <Form.Group className='form'>
                    <Form.Label>消費経験点</Form.Label>
                    <Form.Control
                        value={useExp}
                        onChange={(e) => setUseExp(e.target.value === '' ? '' : parseFloat(e.target.value))}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className='form'>
                    <Form.Label>合計経験点</Form.Label>
                    <Form.Control
                        value={totalExp}
                        onChange={(e) => setTotalExp(e.target.value === '' ? '' : parseFloat(e.target.value))}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className='form'>
                    <Form.Label>残経験点</Form.Label>
                    <Form.Control
                        value={restExp}
                        onChange={(e) => setRestExp(e.target.value === '' ? '' : parseFloat(e.target.value))}
                    ></Form.Control>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default CharacterMake_player;