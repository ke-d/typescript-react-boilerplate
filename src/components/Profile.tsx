// https://randomuser.me/api

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

interface ProfileState {
  data: any;
}

class Profile extends React.Component<{}, ProfileState> {
  public state = {
    data: undefined,
  };
  public async componentDidMount() {
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json();
    this.setState({
      data,
    });
  }
  public render() {
    if (!this.state.data) {
      return <div>Loading</div>;
    }
    console.log(this.state.data);
    // @ts-ignore
    const result = this.state.data.results[0];
    console.log(result);
    return (
      <Card>
        <CardImg
          top={true}
          width="100%"
          src={result.picture.large}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{result.name.first}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    );
  }
}

export default Profile;
