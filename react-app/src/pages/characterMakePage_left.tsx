import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CharacterMake_personality from '../components/characterMake_personality';
import CharacterMake_ability from '../components/characterMake_ability';
import CharacterMake_subAbility from '../components/characterMake_subAbility';
import CharacterMake_lifepass from '../components/characterMake_lifepass';
import CharacterMake_lois from '../components/characterMake_lois';
import CharacterMake_player from '../components/characterMake_player';

const CharacterMakePage_left: React.FC = () => {
    const [character, setCharacter] = useState<number | string | null>(null);

    // 作成したキャラクターをjsonファイルとして保存
    const handleCharacter = (calculatedResult: number | string) => {
        setCharacter(calculatedResult);
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <CharacterMake_personality onCalculate={handleCharacter} />
                            <CharacterMake_player onCalculate={handleCharacter} />
                            <CharacterMake_ability onCalculate={handleCharacter} />
                            <CharacterMake_subAbility onCalculate={handleCharacter} />
                            <CharacterMake_lifepass onCalculate={handleCharacter} />
                            <CharacterMake_lois onCalculate={handleCharacter} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CharacterMakePage_left;