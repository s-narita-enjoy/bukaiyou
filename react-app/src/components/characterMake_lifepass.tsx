import "../characterMake.css"
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, CardBody } from 'react-bootstrap';

interface CharacterMakeProps {
    onCalculate: (result: number | string) => void;
}

const CharacterMake_lifepass: React.FC<CharacterMakeProps> = (onCaliculate) => {
    const [syutuji, setSyutuji] = useState<string | ''>('');
    const [keikenn, setKeiken] = useState<string | ''>('');
    const [kaikou, setKaikou] = useState<string | ''>('');
    const [kakusei, setKakusei] = useState<string | ''>('');
    const [kakuseiSinsyokuti, setKakuseiSinsyokuti] = useState<string | ''>('');
    const [syoudou, setSyoudou] = useState<number | ''>('');
    const [syoudouSinsyokuti, setSyoudouSinsyokuti] = useState<number | ''>('');

    return (
        <Container className="mt-5" style={{ display: 'flex', justifyContent: 'flex-start', width: '60rem'}}>
                    <Form>
                        <Form.Group className='form'>
                            <Form.Label>出自</Form.Label>
                            <Form.Control
                                value={syutuji}
                                onChange={(e) => setSyutuji(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className='form'>
                            <Form.Label>経験</Form.Label>
                            <Form.Control
                                value={keikenn}
                                onChange={(e) => setKeiken(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className='form'>
                            <Form.Label>邂逅</Form.Label>
                            <Form.Control
                                value={kaikou}
                                onChange={(e) => setKaikou(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className='form'>
                            <Form.Label>覚醒</Form.Label>
                            <Form.Control
                                as='select'
                                value={syutuji}
                                onChange={(e) => setSyutuji(e.target.value)}
                            >
                                <option value="0">死</option>
                                <option value="1">憤怒</option>
                                <option value="2">素体</option>
                                <option value="3">感染</option>
                                <option value="4">渇望</option>
                                <option value="5">無知</option>
                                <option value="6">犠牲</option>
                                <option value="7">命令</option>
                                <option value="8">忘却</option>
                                <option value="9">探求</option>
                                <option value="10">償い</option>
                                <option value="11">生誕</option>
                            </Form.Control>
                            <Form.Label>浸食値</Form.Label>
                            <Form.Control></Form.Control>
                        </Form.Group>
                        <Form.Group className='form'>
                            <Form.Label>衝動</Form.Label>
                            <Form.Control
                                as='select'
                                value={syutuji}
                                onChange={(e) => setSyutuji(e.target.value)}
                            >
                                <option value="0">解放</option>
                                <option value="1">吸血</option>
                                <option value="2">飢餓</option>
                                <option value="3">殺戮</option>
                                <option value="4">破壊</option>
                                <option value="5">加虐</option>
                                <option value="6">嫌悪</option>
                                <option value="7">闘争</option>
                                <option value="8">妄想</option>
                                <option value="9">自傷</option>
                                <option value="10">恐怖</option>
                                <option value="11">憎悪</option></Form.Control>
                            <Form.Label>浸食値</Form.Label>
                            <Form.Control></Form.Control>
                        </Form.Group>
                    </Form>
        </Container >
    );
};

export default CharacterMake_lifepass;