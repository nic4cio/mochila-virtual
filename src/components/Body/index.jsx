import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import reactLogo from "../../assets/react.svg"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Link } from 'react-router-dom';

function Body () {
    return (
        <Container>
            <Row>                
                <Col>
                    <h1 className="h1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                    <p>Curabitur feugiat, elit id condimentum luctus, 
                    orci massa mollis eros, non congue erat neque sit amet odio.</p>
                </Col>
                <Col>
                    <img style={{width: '22rem', height: '22rem'}} src={reactLogo} alt="#" />
                </Col>
            </Row> 

            <Row>                
                <Col>
                <Link to="/materiascc"><Button style={{width: '27rem', height: '20rem'}}> <h2>Ciência da Computação</h2></Button></Link>
                </Col>
                <Col>
                <Link to="/materiasec"><Button style={{width: '27rem', height: '20rem'}}> <h2>Engenharia da Computação</h2></Button></Link>  
                </Col>
            </Row> 

            <Row>                
                <Col>
                    <img style={{width: '22rem', height: '22rem'}} src={reactLogo} alt="#" />
                </Col>
                <Col>
                    <h1 className="h1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                    <p>Curabitur feugiat, elit id condimentum luctus, 
                    orci massa mollis eros, non congue erat neque sit amet odio.</p>
                </Col>
            </Row> 

            <Row>                
                <Col>
                    <Card>
                        Curadoria 
                    </Card>
                </Col>
                <Col>
                    <Card>
                        Disciplinas
                    </Card>
                </Col>
                <Col>
                    <Card>
                        Comunidade
                    </Card>
                </Col>
            </Row> 
            


        </Container>
    )
}

export default Body