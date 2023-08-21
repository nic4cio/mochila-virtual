import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function SearchBar () {
    return (
        <div>
            <Row className="align-items-center">
                <Col><Form.Control placeholder="search..."/></Col>
            </Row>
        </div>
    )
}

export default SearchBar