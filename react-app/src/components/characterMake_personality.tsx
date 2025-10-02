import "../characterMake.css";
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, CardBody } from 'react-bootstrap';

interface CharacterMakeProps {
    onCalculate: (result: number | string) => void;
}

const CharacterMake_personality: React.FC<CharacterMakeProps> = (onCaliculate) => {
    const [characterName, setCharacterName] = useState<string | ''>('');
    const [codeName, setCodeName] = useState<string | ''>('');
    const [age, setAge] = useState<number | ''>('');
    const [sex, setSex] = useState<string | ''>('');
    const [zodiac, setZodiac] = useState<string | ''>('');
    const [height, setHeight] = useState<number | ''>('');
    const [weight, setWeight] = useState<number | ''>('');
    const [blood, setBlood] = useState<string | ''>('');
    const [chalacterData, setChalacterData] = useState({});

    return (
        <Container className="mt-5" style={{ display: 'flex', justifyContent: 'flex-start', width: '60rem'}}>
            <Form>
                <Form.Group className='form'>
                    <Form.Label>キャラクター名</Form.Label>
                    <Form.Control
                    value={characterName}
                    onChange={(e) => setCharacterName(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className='form'>
                    <Form.Label>コードネーム</Form.Label>
                    <Form.Control
                    value={codeName}
                    onChange={(e) => setCodeName(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className='form'>
                    <Form.Label>年齢</Form.Label>
                    <Form.Control
                    value={age}
                    onChange={(e) => setAge(e.target.value === '' ? '' : parseFloat(e.target.value))}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className='form'>
                    <Form.Label>性別</Form.Label>
                    <Form.Control
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className='form'>
                    <Form.Label>星座</Form.Label>
                    <Form.Control
                    value={zodiac}
                    onChange={(e) => setZodiac(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className='form'>
                    <Form.Label>身長</Form.Label>
                    <Form.Control
                    value={height}
                    onChange={(e) => setHeight(e.target.value === '' ? '' : parseFloat(e.target.value))}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className='form'>
                    <Form.Label>体重</Form.Label>
                    <Form.Control
                    value={weight}
                    onChange={(e) => setWeight(e.target.value === '' ? '' : parseFloat(e.target.value))}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className='form'>
                    <Form.Label>血液型</Form.Label>
                    <Form.Control
                    value={blood}
                    onChange={(e) => setBlood(e.target.value)}
                    ></Form.Control>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default CharacterMake_personality;