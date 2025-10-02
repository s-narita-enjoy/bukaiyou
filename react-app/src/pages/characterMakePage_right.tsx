
import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CharacterMake_effects from '../components/characterMake_effects';
import CharacterMake_wepons from '../components/characterMake_wepons';
import CharacterMake_armors from '../components/characterMake_armors';
import CharacterMake_commonItem from '../components/characterMake_commonItem';
import CharacterMake_combo from '../components/characterMake_combo';

const CharacterMakePage_right: React.FC = () => {
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
                            <CharacterMake_effects onCalculate={handleCharacter} />
                            <CharacterMake_wepons onCalculate={handleCharacter} />
                            <CharacterMake_armors onCalculate={handleCharacter} />
                            <CharacterMake_commonItem onCalculate={handleCharacter} />
                            <CharacterMake_combo onCalculate={handleCharacter} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CharacterMakePage_right;