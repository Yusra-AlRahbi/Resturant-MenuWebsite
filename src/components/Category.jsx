
import { Col, Row } from 'react-bootstrap'

function Category() {
  return (
    <Row className='my-2 mb-5'>
        <Col sm="12" className='d-flex justify-content-center'>
        <div>
            <button className='btn mx-2'>All</button>
            <button className='btn mx-2'>Brackfast</button>
            <button className='btn mx-2'>Lunch</button>
            <button className='btn mx-2'>Dinnar</button>
        </div>
        </Col>
    </Row>
  )
}

export default Category