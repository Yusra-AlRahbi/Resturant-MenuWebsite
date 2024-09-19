import { Card, Col, Row } from "react-bootstrap";

function CardList() {
  return (
    <Row>
      <Col sm="12" className="mb-3">
        <Card className="d-flex flex-row">
          <Card.Img
            variant="top"
            src="../assets/img/pizza.jpg"
            className="img-item"
          />
          <Card.Body>
            <Card.Title className=" d-flex justify-content-between">
              <div className="item-title">PIZZA</div>
              <div className="item-price">1 OR</div>

              </Card.Title>
            <Card.Text className="py-2">
              <div className="item-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus adipisci incidunt ut distinctio nihil exercitationem
                illo officia, debitis veniam impedit iusto praesentium minus
                reiciendis sint doloremque et aspernatur blanditiis modi!
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default CardList;
