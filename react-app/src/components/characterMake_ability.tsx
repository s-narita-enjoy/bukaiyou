import "../characterMake.css"
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, CardBody, CardGroup } from 'react-bootstrap';

interface CharacterMakeProps {
    onCalculate: (result: number | string) => void;
}

const CharacterMake_ability: React.FC<CharacterMakeProps> = (onCaliculate) => {
    const [works, setWorks] = useState<string | ''>('');
    const [breed, setBreed] = useState<string | ''>('');
    const [syndrome1, setSyndrome1] = useState<string | ''>('');
    const [syndrome2, setSyndrome2] = useState<string | ''>('');
    const [optionalSyndrome, setOptionalSyndrome] = useState<string | ''>('');
    const [nikutai, setNikutai] = useState<number | ''>('');
    const [hakuhei, setHakuhei] = useState<number | ''>('');
    const [kaihi, setKaihi] = useState<number | ''>('');
    const [kankaku, setKankaku] = useState<number | ''>('');
    const [syageki, setSyageki] = useState<number | ''>('');
    const [tikaku, setTikaku] = useState<number | ''>('');
    const [seishin, setSeishin] = useState<number | ''>('');
    const [rc, setRc] = useState<number | ''>('');
    const [ishi, setIshi] = useState<number | ''>('');
    const [syakai, setSyakai] = useState<number | ''>('');
    const [kousyou, setKousyou] = useState<number | ''>('');
    const [tyoutatu, setTyoutatu] = useState<number | ''>('');
    const [chalacterData, setChalacterData] = useState({});

    return (
        <Container className="mt-5" style={{ display: 'flex', justifyContent: 'flex-start', width: '60rem'}}>
            <Form>
                <Form.Group className='form'>
                    <Form.Label>ワークス</Form.Label>
                    <Form.Control
                        as="select"
                        value={works}
                        onChange={(e) => setWorks(e.target.value)}
                    >
                        <option value="1">小学生</option>
                        <option value="2">中学生</option>
                        <option value="3">高校生</option>
                        <option value="4">不良学生</option>
                        <option value="5">大学生</option>
                        <option value="6">フリーター</option>
                        <option value="7">教師</option>
                        <option value="8">主婦・主夫</option>
                        <option value="9">UGNチルドレンA</option>
                        <option value="10">UGNチルドレンB</option>
                        <option value="11">UGNチルドレンC</option>
                        <option value="12">UGNチルドレンD</option>
                        <option value="13">UGNエージェントA</option>
                        <option value="14">UGNエージェントB</option>
                        <option value="15">UGNエージェントC</option>
                        <option value="16">UGNエージェントD</option>
                        <option value="17">UGN支部長A</option>
                        <option value="18">UGN支部長B</option>
                        <option value="19">UGN支部長C</option>
                        <option value="20">UGN支部長D</option>
                        <option value="21">刑事</option>
                        <option value="22">鑑識</option>
                        <option value="23">弁護士</option>
                        <option value="24">防衛隊員</option>
                        <option value="25">研究者</option>
                        <option value="26">教授</option>
                        <option value="27">看護師</option>
                        <option value="28">医者</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='form'>
                    <Form.Label>ブリード</Form.Label>
                    <Form.Control as="select"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                    >
                        <option value="pure">ピュア</option>
                        <option value="cross">クロス</option>
                        <option value="tri"> トライ</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='form'>
                    <Form.Label>シンドローム1</Form.Label>
                    <Form.Control as="select"
                        value={syndrome1}
                        onChange={(e) => setSyndrome1(e.target.value)}
                    >
                        <option value="angel_halo">エンジェルハィロゥ</option>
                        <option value="balor">バロール</option>
                        <option value="black_dog">ブラックドッグ</option>
                        <option value="bram_stoker">ブラム＝ストーカー</option>
                        <option value="chimaira">キュマイラ</option>
                        <option value="exile">エグザイル</option>
                        <option value="hanuman">ハヌマーン</option>
                        <option value="morpheus">モルフェウス</option>
                        <option value="neumann">ノイマン</option>
                        <option value="orcus">オルクス</option>
                        <option value="salamander">サラマンダー</option>
                        <option value="solaris">ソラリス</option>
                        <option value="uroboros">ウロボロス</option>
                        <option value="azathorth">アザトース</option>
                        <option value="mistilteinn">ミストルテイン</option>
                        <option value="greipnir">グレイプニル</option>
                    </Form.Control>
                    <Form.Label>シンドローム2</Form.Label>
                    <Form.Control as="select"
                        value={syndrome2}
                        onChange={(e) => setSyndrome2(e.target.value)}
                    >
                        <option value="no">なし</option>
                        <option value="angel_halo">エンジェルハィロゥ</option>
                        <option value="balor">バロール</option>
                        <option value="black_dog">ブラックドッグ</option>
                        <option value="bram_stoker">ブラム＝ストーカー</option>
                        <option value="chimaira">キュマイラ</option>
                        <option value="exile">エグザイル</option>
                        <option value="hanuman">ハヌマーン</option>
                        <option value="morpheus">モルフェウス</option>
                        <option value="neumann">ノイマン</option>
                        <option value="orcus">オルクス</option>
                        <option value="salamander">サラマンダー</option>
                        <option value="solaris">ソラリス</option>
                        <option value="uroboros">ウロボロス</option>
                        <option value="azathorth">アザトース</option>
                        <option value="mistilteinn">ミストルテイン</option>
                        <option value="greipnir">グレイプニル</option>
                    </Form.Control>
                    <Form.Label>オプショナルシンドローム</Form.Label>
                    <Form.Control as="select"
                        value={optionalSyndrome}
                        onChange={(e) => setOptionalSyndrome(e.target.value)}
                    >
                        <option value="no">なし</option>
                        <option value="angel_halo">エンジェルハィロゥ</option>
                        <option value="balor">バロール</option>
                        <option value="black_dog">ブラックドッグ</option>
                        <option value="bram_stoker">ブラム＝ストーカー</option>
                        <option value="chimaira">キュマイラ</option>
                        <option value="exile">エグザイル</option>
                        <option value="hanuman">ハヌマーン</option>
                        <option value="morpheus">モルフェウス</option>
                        <option value="neumann">ノイマン</option>
                        <option value="orcus">オルクス</option>
                        <option value="salamander">サラマンダー</option>
                        <option value="solaris">ソラリス</option>
                        <option value="uroboros">ウロボロス</option>
                        <option value="azathorth">アザトース</option>
                        <option value="mistilteinn">ミストルテイン</option>
                        <option value="greipnir">グレイプニル</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="form">
                    <Card className="ability">
                        <Col>
                            <Form.Label>肉体</Form.Label>
                            <Form.Control
                            value={nikutai}
                            onChange={(e) => setNikutai(e.target.value === '' ? '' : parseFloat(e.target.value))}
                            >
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>白兵</Form.Label>
                            <Form.Control
                            value={hakuhei}
                            onChange={(e) => setHakuhei(e.target.value === '' ? '' : parseFloat(e.target.value))}
                            ></Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>白兵</Form.Label>
                            <Form.Control
                            value={kaihi}
                            onChange={(e) => setKaihi(e.target.value === '' ? '' : parseFloat(e.target.value))}
                            ></Form.Control>
                        </Col>
                    </Card>
                    <Card className="ability">
                        <Col>
                            <Form.Label>感覚</Form.Label>
                            <Form.Control
                            value={kankaku}
                            onChange={(e) => setKankaku(e.target.value === '' ? '' : parseFloat(e.target.value))}
                            ></Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>射撃</Form.Label>
                            <Form.Control
                            value={syageki}
                            onChange={(e) => setSyageki(e.target.value === '' ? '' : parseFloat(e.target.value))}
                            ></Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>知覚</Form.Label>
                            <Form.Control
                            value={tikaku}
                            onChange={(e) => setTikaku(e.target.value === '' ? '' : parseFloat(e.target.value))}
                            ></Form.Control>
                        </Col>
                    </Card>
                    <Card className="ability">
                        <Col>
                            <Form.Label>精神</Form.Label>
                            <Form.Control
                            value={seishin}
                            onChange={(e) => setSeishin(e.target.value === '' ? '' : parseFloat(e.target.value))}
                            ></Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>RC</Form.Label>
                            <Form.Control
                            value={rc}
                            onChange={(e) => setRc(e.target.value === '' ? '' : parseFloat(e.target.value))}
                            ></Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>意志</Form.Label>
                            <Form.Control
                            value={ishi}
                            onChange={(e) => setIshi(e.target.value === '' ? '' : parseFloat(e.target.value))}
                            ></Form.Control>
                        </Col>
                    </Card>
                    <Card className="ability">
                        <Col>
                            <Form.Label>社会</Form.Label>
                            <Form.Control
                            value={syakai}
                            onChange={(e) => setSyakai(e.target.value === '' ? '' : parseFloat(e.target.value))}
                            ></Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>交渉</Form.Label>
                            <Form.Control
                            value={kousyou}
                            onChange={(e) => setKousyou(e.target.value === '' ? '' : parseFloat(e.target.value))}
                            ></Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>調達</Form.Label>
                            <Form.Control
                            value={tyoutatu}
                            onChange={(e) => setTyoutatu(e.target.value === '' ? '' : parseFloat(e.target.value))}
                            ></Form.Control>
                        </Col>
                    </Card>
                </Form.Group>

            </Form>
        </Container >
    );
};

export default CharacterMake_ability;