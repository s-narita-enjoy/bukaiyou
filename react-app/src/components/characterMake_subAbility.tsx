import "../characterMake.css";
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, CardBody } from 'react-bootstrap';

interface CharacterMakeProps {
    onCalculate: (result: number | string) => void;
}

const CharacterMake_subAbility: React.FC<CharacterMakeProps> = (onCaliculate) => {
    const [HP, setHP] = useState<number | ''>('');
    const [koudouti, setKoudouti] = useState<number | ''>('');
    const [joubikaPoints, setJoubikaPoints] = useState<number | ''>('');
    const [zaisanPoints, setZaisanPoints] = useState<number | ''>('');
    const [battleMove, setBattleMove] = useState<number | ''>('');
    const [fullMove, setFullMove] = useState<number | ''>('');
    const [chalacterData, setChalacterData] = useState({});

    return (
        <Container className="mt-5" style={{ display: 'flex', justifyContent: 'flex-start', width: '60rem'}}>
            <Form>
                <Form.Group className="form">
                    <Form.Label>HP最大値</Form.Label>
                    <Form.Control
                        value={HP}
                        onChange={(e) => setHP(e.target.value === '' ? '' : parseFloat(e.target.value))}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="form">
                    <Form.Label>行動値</Form.Label>
                    <Form.Control
                        value={koudouti}
                        onChange={(e) => setKoudouti(e.target.value === '' ? '' : parseFloat(e.target.value))}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="form">
                    <Form.Label>常備化ポイント</Form.Label>
                    <Form.Control
                        value={joubikaPoints}
                        onChange={(e) => setJoubikaPoints(e.target.value === '' ? '' : parseFloat(e.target.value))}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="form">
                    <Form.Label>財産ポイント</Form.Label>
                    <Form.Control
                        value={zaisanPoints}
                        onChange={(e) => setZaisanPoints(e.target.value === '' ? '' : parseFloat(e.target.value))}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="form">
                    <Form.Label>戦闘移動</Form.Label>
                    <Form.Control
                        value={battleMove}
                        onChange={(e) => setBattleMove(e.target.value === '' ? '' : parseFloat(e.target.value))}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="form">
                    <Form.Label>全力移動</Form.Label>
                    <Form.Control
                        value={fullMove}
                        onChange={(e) => setFullMove(e.target.value === '' ? '' : parseFloat(e.target.value))}
                    ></Form.Control>
                </Form.Group>
            </Form>
        </Container >
    );
};

export default CharacterMake_subAbility;