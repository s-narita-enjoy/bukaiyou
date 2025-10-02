import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, CardBody } from 'react-bootstrap';

interface CharacterMakeProps {
    onCalculate: (result: number | string) => void;
}

const CharacterMake_effects: React.FC<CharacterMakeProps> = (onCaliculate) => {
    const [characterName, setCharacterName] = useState<string | ''>('');
    const [codeName, setCodeName] = useState<string | ''>('');
    const [age, setAge] = useState<number | ''>('');
    const [sex, setSex] = useState<string | ''>('');
    const [zodiac, setZodiac] = useState<string | ''>('');
    const [height, setHeight] = useState<number | ''>('');
    const [weight, setWeight] = useState<number | ''>('');
    const [blood, setBlood] = useState<string | ''>('');
    const [playerName, setPlayerName] = useState<string | ''>('');
    const [useExp, setUseExp] = useState<number | ''>('');
    const [totalExp, setTotalExp] = useState<number | ''>('');
    const [restExp, setRestExp] = useState<number | ''>('');
    const [works, setWorks] = useState<string | ''>('');
    const [breed, setBreed] = useState<string | ''>('');
    const [syndrome1, setSyndrome1] = useState<string | ''>('');
    const [syndrome2, setSyndrome2] = useState<string | ''>('');
    const [optionalSyndrome, setOptionalSyndrome] = useState<string | ''>('');
    const [nikutai, setNikutai] = useState<number | ''>('');
    const [kankaku, setKankaku] = useState<number | ''>('');
    const [seishin, setSeishin] = useState<number | ''>('');
    const [syakai, setSyakai] = useState<number | ''>('');
    const [syutuji, setSyutuji] = useState<number | ''>('');
    const [keiken, setKeiken] = useState<number | ''>('');
    const [kaikou, setKaikou] = useState<number | ''>('');
    const [kakusei, setKakusei] = useState<number | ''>('');
    const [kakuseiElosion, setKakuseiElosion] = useState<number | ''>('');
    const [syoudou, setSyoudou] = useState<number | ''>('');
    const [syoudouElosion, setSyoudouElosion] = useState<number | ''>('');
    const [HP, setHP] = useState<number | ''>('');
    const [koudouti, setKoudouti] = useState<number | ''>('');
    const [joubikaPoints, setJoubikaPoints] = useState<number | ''>('');
    const [zaisanPoints, setZaisanPoints] = useState<number | ''>('');
    const [battleMove, setBattleMove] = useState<number | ''>('');
    const [fullMove, setFullMove] = useState<number | ''>('');
    const [lois, setlois] = useState<string | ''>('');
    const [chalacterData, setChalacterData] = useState({});

    return (
        <Container className="mt-5">
            <Card>
                <Col>
                    <Form.Label>エフェクト</Form.Label>
                    <Form.Control></Form.Control>
                </Col>
            </Card>
        </Container>
    );
};

export default CharacterMake_effects;