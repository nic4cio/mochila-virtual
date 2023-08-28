import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import pdsLogo from '../../assets/pdslogo.svg';
import logo2 from '../../assets/logo2.svg';
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Link } from 'react-router-dom';

function Body () {
    return (
        <Container>
            <Row>                
                <Col>
                    <h1 className="h1" style={{color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                    <p style={{color: 'white'}}>Curabitur feugiat, elit id condimentum luctus, 
                    orci massa mollis eros, non congue erat neque sit amet odio.</p>
                </Col>
                <Col>
                    <img style={{width: '22rem', height: '22rem', alignItems:'Center'}} src={pdsLogo} alt="#" />
                </Col>
            </Row> 

            <Row>                
                <Col>
                <Link to="/materiascc"><Button style={{width: '32rem', height: '20rem', background: '#021017', color: '#33E4FA', border: '1px', borderRadius:'40px'}}> <h2>Ciência da Computação</h2></Button></Link>
                </Col>
                <Col>
                <Link to="/materiasec"><Button style={{width: '32rem', height: '20rem', background: '#021017', color: '#9CE7C8', border: '1px', borderRadius:'40px'}}> <h2>Engenharia da Computação</h2></Button></Link>  
                </Col>
            </Row> 

            <Row>                
                <Col>
                    <img style={{width: '22rem', height: '22rem'}} src={logo2} alt="#" />
                </Col>
                <Col>
                    <h1 className="h1" style={{color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                    <p style={{color: 'white'}}>Curabitur feugiat, elit id condimentum luctus, 
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