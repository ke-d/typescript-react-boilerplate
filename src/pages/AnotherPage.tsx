import * as React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from 'reactstrap';

class AnotherPage extends React.Component {
  public render() {
    return (
      <Container>
        <Row>
          <Col xs="6">
            <div>
              <Card>
                <CardImg
                  top={true}
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col xs="6">Another Col</Col>
        </Row>
      </Container>
    );
  }
}

export default AnotherPage;
