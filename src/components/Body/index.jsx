import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import pdsLogo from '../../assets/pdslogo.svg';
import logo2 from '../../assets/logo2.svg';
import estrelabranca from '../../assets/estrela-branca.png';
import Button from "react-bootstrap/Button"
import { Link } from 'react-router-dom';
// import Card from "react-bootstrap/Card"
// import { Translate } from "react-bootstrap-icons";

function Body () {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    return (
        <Container>
            {/* Home 1 */}
            <Row>                
                <Col>
                    <h1 className="h1" style={{
                        color: 'white', 
                        fontWeight: 'bold', 
                        width: '40rem', 
                        marginTop: '80px', 
                        fontSize: '50px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>

                    <p style={{
                        color: 'white', 
                        width: '35rem',
                        fontSize: '20px', 
                        marginTop: '20px', 
                        marginBottom: '60px'}}>Curabitur feugiat, elit id condimentum luctus, orci massa mollis eros, non congue erat neque sit amet odio.</p>
                </Col>
                <Col>
                    <img style={{
                        width: '21rem', 
                        height: '21rem', 
                        alignItems: 'center', 
                        marginLeft: '150px', 
                        marginTop: '50px', 
                        marginBottom: '80px'}} src={pdsLogo} alt="#" />
                </Col>
            </Row> 

            <Row>
                <Col>
                    <Link to="/materiascc"><Button style={{
                        width: '36rem', 
                        height: '18rem', 
                        background: '#171F23', 
                        color: '#33E4FA', 
                        border: '1px', 
                        borderRadius:'40px'}}><h2>Ciência da Computação</h2></Button></Link>
                </Col>
                <Col>
                    <Link to="/materiasec"><Button style={{
                        width: '36rem', 
                        height: '18rem', 
                        background: '#171F23', 
                        color: '#9CE7C8', 
                        border: '1px', 
                        borderRadius:'40px'}}> <h2>Engenharia da Computação</h2></Button></Link>  
                </Col>
            </Row> 

            {/* Home 2 */}
            <Row>                
                <Col>
                    <img style={{
                        width: '21rem', 
                        height: '21rem', 
                        marginTop: '150px'}} src={logo2} alt="#" />
                </Col>
                <Col>
                    <h1 className="h1" style={{
                        color: 'white',
                        fontWeight: 'bold', 
                        width: '30rem', 
                        marginTop: '200px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>

                    <p style={{
                        color: 'white', 
                        width: '35rem',
                        fontSize: '20px', 
                        marginTop: '20px', 
                        marginBottom: '60px'}}>Curabitur feugiat, elit id condimentum luctus, orci massa mollis eros, non congue erat neque sit amet odio.</p>
                </Col>
            </Row> 

            <Row>                
                <Col>
                    <Button style={{
                        width: '20rem', 
                        height: '20rem', 
                        background: '#171F23', 
                        color: '#FFF', 
                        border: '1px', 
                        borderRadius:'40px', 
                        marginTop: '100px'}}> <h2>Curadoria</h2></Button>
                </Col>
                <Col>
                    <Button style={{
                        width: '20rem', 
                        height: '20rem', 
                        background: '#171F23', 
                        color: '#FFF', 
                        border: '1px', 
                        borderRadius:'40px', 
                        marginTop: '100px'}}> <h2>Disciplinas</h2></Button>
                </Col>
                <Col>
                    <Button style={{
                        width: '20rem', 
                        height: '20rem', 
                        background: '#171F23', 
                        color: '#FFF', 
                        border: '1px', 
                        borderRadius:'40px', 
                        marginTop: '100px'}}> <h2>Comunidade</h2></Button>
                </Col>
            </Row>

            {/* Home 3 */}
            <Row>
                <Col>
                    <h1 className="h1" style={{
                        color: 'white',
                        fontWeight: 'bolder', 
                        width: '40rem',
                        fontWeight: 'bold',
                        fontSize: '66px', 
                        marginTop: '200px'}}>Seja um curador</h1>

                    <p style={{
                        color: 'white', 
                        width: '35rem',
                        fontSize: '20px', 
                        marginTop: '20px', 
                        marginBottom: '60px'}}>Curabitur feugiat, elit id condimentum luctus, orci massa mollis eros,
                                               non congue erat neque sit amet odio. Curabitur feugiat, elit id condimentum
                                               luctus, orci massa mollis eros, non congue erat neque sit amet odio. </p>
                </Col>

                <Col>
                    <img style={{
                        width: '18rem', 
                        height: '18rem', 
                        marginTop: '150px',
                        marginLeft: '220px',
                        marginBottom: '120px'}} src={estrelabranca} alt="#" />
                </Col>
            </Row>             

            <Row>
                <Col>
                    <Button style={{
                        width: '20rem', 
                        height: '20rem', 
                        background: '#42524C', 
                        color: '#FFF', 
                        border: '1px', 
                        borderRadius:'200px'}}> <h2>Ajude estudantes</h2></Button>
                </Col>
                
                <Col>
                    <Button style={{
                        width: '20rem', 
                        height: '20rem', 
                        background: '#42524C', 
                        color: '#FFF', 
                        border: '1px', 
                        borderRadius:'200px'}}> <h2>Receba badges exclusivas</h2></Button>
                </Col>

                <Col>
                    <Button style={{
                        width: '20rem', 
                        height: '20rem', 
                        background: '#42524C', 
                        color: '#FFF', 
                        border: '1px', 
                        borderRadius:'200px'}}> <h2>Reconhecimento</h2></Button>
                </Col>
            </Row>

            <Row>
                <Link to="/cadastro"><Button style={{
                                    width: '40rem', 
                                    height: '7rem', 
                                    background: '#78D6CF', 
                                    color: '#FFF', 
                                    border: '1px',
                                    borderRadius: '20px',
                                    margin: '40px 0 0 280px'
                                    }}> <h2>Aplique agora!</h2></Button></Link>  
            </Row> 

            <Row>
                <img onClick={scrollToTop} style={{
                            width: '6rem', 
                            height: '6rem',
                            margin: '20px 0 0 570px',
                            cursor: 'pointer',
                            }} src={pdsLogo} alt="#" />
            </Row>
        </Container>
    )
}

export default Body