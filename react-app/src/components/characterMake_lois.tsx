import "../characterMake.css"
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, CardBody, Table } from 'react-bootstrap';

interface CharacterMakeProps {
    onCalculate: (result: number | string) => void;
}

const CharacterMake_lois: React.FC<CharacterMakeProps> = (onCaliculate) => {
    const [lois, setLois] = useState<string | ''>('');
    const [chalacterData, setChalacterData] = useState({});

    return (
        <Container className="mt-5" style={{ display: 'flex', justifyContent: 'flex-start', width: '60rem'}}>
            <Card>
                <Card.Title>ロイス</Card.Title>
            <Form className="form">
                <Table>
                    <tr>
                        <th>関係</th>
                        <th>名前</th>
                        <th>感情(positive)</th>
                        <th></th>
                        <th>感情(negative)</th>
                        <th></th>
                        <th>タイタス</th>
                    </tr>
                    <tr>
                    <td><Form.Control></Form.Control></td>
                        <td><Form.Control></Form.Control></td>
                        <td><Form.Control></Form.Control></td>
                        <td><Form.Check></Form.Check></td>
                        <td><Form.Control></Form.Control></td>
                        <td><Form.Check></Form.Check></td>
                        <td><Form.Check></Form.Check></td>
                    </tr>
                    <tr>
                        <td><Form.Control></Form.Control></td>
                        <td><Form.Control></Form.Control></td>
                        <td><Form.Control></Form.Control></td>
                        <td><Form.Check></Form.Check></td>
                        <td><Form.Control></Form.Control></td>
                        <td><Form.Check></Form.Check></td>
                        <td><Form.Check></Form.Check></td>
                    </tr>
                    <tr>
                    <td><Form.Control></Form.Control></td>
                        <td><Form.Control></Form.Control></td>
                        <td><Form.Control></Form.Control></td>
                        <td><Form.Check></Form.Check></td>
                        <td><Form.Control></Form.Control></td>
                        <td><Form.Check></Form.Check></td>
                        <td><Form.Check></Form.Check></td>
                    </tr>
                </Table>
            </Form>
            </Card>
        </Container>
    );
};

export default CharacterMake_lois;