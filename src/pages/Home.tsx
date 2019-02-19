import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Jumbotron } from 'reactstrap';
import BasicForm from '../components/BasicForm';

class Home extends React.Component {
  public render() {
    return (
      <div>
        <BasicForm />
      </div>
    );
  }
}

export default Home;
