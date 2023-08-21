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
            <Row className="p-5">                
                <Col>
                    <h1 className="h1 text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                    <p className="text-white" >Curabitur feugiat, elit id condimentum luctus, 
                    orci massa mollis eros, non congue erat neque sit amet odio.</p>
                </Col>
                <Col>
                    <img style={{width: '22rem', height: '22rem'}} src={reactLogo} alt="#" />
                </Col>
            </Row> 

            <Row className="p-5">                
                <Col>
                <Link to="/materiascc"><Button style={{width: '27rem', height: '20rem'}}> <h2>Ciência da Computação</h2></Button></Link>
                </Col>
                <Col>
                <Link to="/materiasec"><Button style={{width: '27rem', height: '20rem'}}> <h2>Engenharia da Computação</h2></Button></Link>  
                </Col>
            </Row> 

            <Row className="p-5">                
                <Col>
                    <img style={{width: '22rem', height: '22rem'}} src={reactLogo} alt="#" />
                </Col>
                <Col>
                    <h1 className="h1 text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                    <p className="text-white" >Curabitur feugiat, elit id condimentum luctus, 
                    orci massa mollis eros, non congue erat neque sit amet odio.</p>
                </Col>
            </Row> 

            <Row className="p-5">                
                <Col>
                    <Card className="text-center" style={{width: '20rem', height: '20rem'}} >
                        <h2>Curadoria</h2>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center" style={{width: '20rem', height: '20rem'}}>
                        <h2>Disciplinas</h2>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center" style={{width: '20rem', height: '20rem'}}>
                        <h2>Comunidade</h2>
                    </Card>
                </Col>
            </Row> 

            <Row className="p-5">                
                <Col>
                    <h1 className="h1 text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                    <p className="text-white" >Curabitur feugiat, elit id condimentum luctus, 
                    orci massa mollis eros, non congue erat neque sit amet odio.</p>
                </Col>
                <Col>
                    <img style={{width: '22rem', height: '22rem'}} src={reactLogo} alt="#" />
                </Col>
            </Row> 

            <Row className="p-5">                
                <Col>
                    <Card className="text-center rounded-circle" style={{width: '20rem', height: '20rem'}} >
                        <h2>Curadoria</h2>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center rounded-circle" style={{width: '20rem', height: '20rem'}}>
                        <h2>Disciplinas</h2>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center rounded-circle" style={{width: '20rem', height: '20rem'}}>
                        <h2>Comunidade</h2>
                    </Card>
                </Col>
            </Row>

            
            <Row className="p-3" >
                <Button style={{width: '30em', height:'5em', margin: '0 auto'}}>
                    Aplique agora!
                </Button>
            </Row>

            
        </Container>
    )
}

export default Body 