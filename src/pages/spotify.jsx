import { Row, Col, Card, Container, Button } from "react-bootstrap";

export default function Spotify() {
    return (
        <>
            <Container>
                <Row>
                    <Col md={10}>
                    <h1>Canciones en tendencia</h1>
                    </Col>
            
                    <Col md={2}>
                    <Button>mostrar todo</Button>
                    </Col>
                </Row>
                <Row>

                    <Col md={3} >
                        <Card>
                          
                            <Card.Img src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da849791a387d25dcbaae803e5d4" />
                            <Card.Title>Ivonny Bonita</Card.Title>
                            <Card.Text>KAROL G</Card.Text>
                        </Card>

                    </Col>
                    <Col md={3}>
                    <Card>
                        <Card.Img src="https://cdn-images.dzcdn.net/images/cover/120bed3139d165c361bf22fdfea107c8/0x1900-000000-80-0-0.jpg" />
                        <Card.Title>Un polvito+</Card.Title>
                        <Card.Text>Maluma,Maisak</Card.Text>
                        </Card>
                    </Col>
                    <Col md={3}>
                    <Card >
                        <Card.Img src="https://i.scdn.co/image/ab67616d0000b273899bc95d3695390008b32692" />
                        <Card.Title>La Bebesita</Card.Title>
                        <Card.Text>Casper Magico,Anuel</Card.Text>
                        </Card>
                    </Col>
                    
                    <Col md={3}>
                    <Card >
                        <Card.Img src="https://i.scdn.co/image/ab67616d0000b273899bc95d3695390008b32692" />
                        <Card.Title>La Bebesita</Card.Title>
                        <Card.Text>Casper Magico,Anuel</Card.Text>
                        </Card>
                    </Col>

              
            </Row>
        </Container >
        </>
    )
}