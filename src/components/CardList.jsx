import { Card, Col, Row } from "react-bootstrap";

const CardList = ({ itemData }) => {
  return (
    <Row>
      {itemData.length >= 1 ? (
        itemData.map((item) => {
          return (
            <Col key={item.id} sm="12" className="mb-3">
              <Card className="d-flex flex-row">
                <Card.Img
                  variant="top"
                  src={item.Img}
                  className="img-item"
                />
                <Card.Body>
                <Card.Title className=" d-flex justify-content-between">
                    <div className="item-title">{item.title}</div>
                    <div className="item-price">{item.price}</div>
                  </Card.Title>
                  <Card.Text className="py-2">
                    <div className="item-description">
                    {item.description}
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })
      ) : (
        <h3 className=" text-center"> No data</h3>
      )}
    </Row>
  );
};

export default CardList;
