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
import CounterButton from '../components/CounterButton';
import Profile from '../components/Profile';
class AnotherPage extends React.Component {
  public render() {
    return (
      <Container>
        <Row>
          <Col xs="12" md="6">
            <div>
              <Profile />
            </div>
          </Col>
          <Col xs="12" md="6">
            <CounterButton buttonColor="primary" />
            <CounterButton buttonColor="success" />
            <CounterButton buttonColor="info" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AnotherPage;
