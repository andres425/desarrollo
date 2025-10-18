import { Button, Card,  Col, Container, Row } from "react-bootstrap";

export function Home() {
    return (
        <>
            <h1>hola home</h1>
            <p>esto es un parrafo de prueba</p>
            <Button variant="primary">hola</Button>
            <Button className="btn btn-primary">otro</Button>
            <Container>
                <Row>
                    <Col className="red" md={3} >Col 1</Col>
                    <Col className="blue" md={{ span: 5, offset: 1 }}>Col 2</Col>
                    <Col className="red" md={{ span: 1, offset: 2 }}>Col 3</Col>
                </Row>
                <Row>
                    <Col className="blue" md={2}>Col 1</Col>
                    <Col className="red" md={10}>
                        <Card style={{
                            width:'18em'
                        }}> 
                   
                        <Card.Body>
                            <Card.Title>esto es un titulo</Card.Title>
                        <Card.Text>
                            esto es un texto de ejemplo bastante largo para que se 
                            pueda ver mejor dentro de la card

                        </Card.Text>
                        </Card.Body>
                        </Card>

                    </Col>
                </Row>

                <Row>
                    <Col className="red" md={2} sm={6}>Col 1</Col>
                    <Col className="blue" md={{ span: 1, offset: 2 }} sm={6}>Col 2</Col>
                    <Col className="red" md={1} sm={6}>Col 3</Col>
                    <Col className="blue" md={{ span: 2, offset: 2 }} sm={6}>Col 4</Col>
                </Row>

            </Container>
        </>
    );
}