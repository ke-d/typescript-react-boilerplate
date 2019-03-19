import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Jumbotron } from 'reactstrap';
import FindUser from '../components/FindUserParent';
import Registration from '../components/Registration';

class Home extends React.Component {
  public render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <Link to="/loading">
              <Button color="primary">Go to a loading spinner</Button>
            </Link>
          </p>
        </Jumbotron>
        <Container>
          <Registration />
          <br />
          <FindUser />
        </Container>
      </div>
    );
  }
}

export default Home;
