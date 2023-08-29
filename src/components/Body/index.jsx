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
                        fontSize: '50px'}}>Bem-vindo(a) a sua Mochila Virtual</h1>

                    <p style={{
                        color: 'white', 
                        width: '35rem',
                        fontSize: '20px', 
                        marginTop: '20px', 
                        marginBottom: '60px'}}>Essa é uma plataforma de gestão e disponibilização de conteúdos digitais das disciplinas do IC, com o intuito de auxiliar o estudante a ter um local de apoio com materiais de qualidade durante sua trajetória no curso.</p>
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
                        marginTop: '200px'}}>Os próprios usuários publicam os conteúdos</h1>

                    <p style={{
                        color: 'white', 
                        width: '35rem',
                        fontSize: '20px', 
                        marginTop: '20px', 
                        marginBottom: '60px'}}>Você pode publicar um novo material e interagir sobre os já publicados, ajudando seus colegas!</p>
                        
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
                        marginTop: '100px'}}> <h2>1. Cadastre-se</h2></Button>
                </Col>
                <Col>
                    <Button style={{
                        width: '20rem', 
                        height: '20rem', 
                        background: '#171F23', 
                        color: '#FFF', 
                        border: '1px', 
                        borderRadius:'40px', 
                        marginTop: '100px'}}> <h2>2. Personalize sua Mochila</h2></Button>
                </Col>
                <Col>
                    <Button style={{
                        width: '20rem', 
                        height: '20rem', 
                        background: '#171F23', 
                        color: '#FFF', 
                        border: '1px', 
                        borderRadius:'40px', 
                        marginTop: '100px'}}> <h2>3. Publique um conteúdo</h2></Button>
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
                    <span style={{
                        color: 'white',
                        fontWeight: 'bolder', 
                        width: '40rem',
                        fontWeight: 'bold',
                        fontSize: '23px', 
                        marginTop: '200px',
                        marginLeft:'15px'}}>E <span style={{color:'#BF7A47'}}>ganhe</span> + horas flexíveis</span>
                        

                    <p style={{
                        color: 'white', 
                        width: '35rem',
                        fontSize: '20px', 
                        marginTop: '20px', 
                        marginBottom: '60px'}}>Antes se serem publicados os conteúdos passarão por uma curadoria, ou seja, será feita uma análise de sua qualidade e relevância. Por isso, para ser um curador e avaliar esses conteúdos, você tem que ser apto:</p>
                
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
                        borderRadius:'200px'}}> <h3>Nota igual ou maior a 8 na disciplina</h3></Button>
                </Col>
                
                <Col>
                    <Button style={{
                        width: '20rem', 
                        height: '20rem', 
                        background: '#42524C', 
                        color: '#FFF', 
                        border: '1px', 
                        borderRadius:'200px'}}> <h3>Estar matriculado</h3></Button>
                </Col>

                <Col>
                    <Button style={{
                        width: '20rem', 
                        height: '20rem', 
                        background: '#42524C', 
                        color: '#FFF', 
                        border: '1px', 
                        borderRadius:'200px'}}> <h3>Coeficiente acumulado maior ou igual a 7</h3></Button>
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