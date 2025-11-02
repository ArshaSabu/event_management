import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function ServiceCard() {
  return (
    <Row className="g-4 justify-content-center">
      {/* Card 1 */}
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card style={{ width: "18rem" }} className="shadow-sm border-0">
          <Card.Img
            variant="top" style={{ width: "100%", height: "200px", objectFit: "cover" }}
            src="https://www.alfaazphotography.com/wp-content/uploads/2020/05/FW-_-SA-1621-scaled.jpg"
          />
          <Card.Body>
            <Card.Title>Wedding Celebration</Card.Title>
            <Card.Text>
              Make your special day unforgettable with our elegant setups.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 2 */}
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card style={{ width: "18rem" }} className="shadow-sm border-0">
          <Card.Img
            variant="top" style={{ width: "100%", height: "200px", objectFit: "cover" }}
            src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <Card.Body>
            <Card.Title>Corporate Event</Card.Title>
            <Card.Text>
              Professional event management for all your business needs.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 3 */}
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card style={{ width: "18rem" }} className="shadow-sm border-0">
          <Card.Img 
            variant="top" style={{ width: "100%", height: "200px", objectFit: "cover" }}
            src="https://www.enhanceyourpalate.com/wp-content/uploads/Boho-Picnic-Birthday-Party-W1200-22.jpg"
          />
          <Card.Body>
            <Card.Title>Birthday Party</Card.Title>
            <Card.Text>
              Fun, colorful, and memorable parties for all age groups.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 4 */}
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card style={{ width: "18rem" }} className="shadow-sm border-0">
          <Card.Img
            variant="top" style={{ width: "100%", height: "200px", objectFit: "cover" }}
            src="https://static.toiimg.com/photo/msid-80334120,width-96,height-65.cms"
          />
          <Card.Body>
            <Card.Title>Cultural Event</Card.Title>
            <Card.Text>
              Celebrate your culture with our creative and vibrant planning.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
       {/* Fashion Show */}
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card style={{ width: "18rem" }} className="shadow-sm border-0">
          <Card.Img
            variant="top" style={{ width: "100%", height: "200px", objectFit: "cover" }}
            src="https://thumbs.dreamstime.com/b/image-captures-excitement-fashion-show-models-strut-down-runway-elegant-purple-dresses-atmosphere-filled-339242284.jpg"
          />
          <Card.Body>
            <Card.Title>Fashion Show</Card.Title>
            <Card.Text>
              Showcase style and elegance with our glamorous stage setups.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Baby Shower */}
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card style={{ width: "18rem" }} className="shadow-sm border-0">
          <Card.Img
            variant="top" style={{ width: "100%", height: "200px", objectFit: "cover" }}
            src="https://a.storyblok.com/f/94137/1440x1080/e7b4dbafb6/couples-baby-shower.jpg/m/"
          />
          <Card.Body>
            <Card.Title>Baby Shower</Card.Title>
            <Card.Text>
              Celebrate new beginnings with a cozy and cheerful baby shower.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Anniversary Celebration */}
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card style={{ width: "18rem" }} className="shadow-sm border-0">
          <Card.Img
            variant="top" style={{ width: "100%", height: "200px", objectFit: "cover" }}
            src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <Card.Body>
            <Card.Title>Anniversary Celebration</Card.Title>
            <Card.Text>
              Relive your love story with a romantic anniversary setup.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default ServiceCard;
