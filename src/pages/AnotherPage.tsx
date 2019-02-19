import * as React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from 'reactstrap';

function importAll(r: __WebpackModuleApi.RequireContext) {
  const imagesObj: any = {};
  r.keys().map((item, index) => {
    imagesObj[item.replace('./', '')] = r(item);
  });
  return imagesObj;
}

const images = importAll(
  require.context('../img', false, /\.(png|jpe?g|svg)$/)
);

interface Project {
  name: string;
  description: string;
  picture?: string;
  link?: string;
}

const projects: Project[] = [
  {
    description: 'This is a project I made in a workshop',
    link: 'https://project.com',
    name: 'Project 1',
    picture: 'img1.jpeg',
  },
  {
    description: 'This is a project I made in a workshop',
    name: 'Project 2',
    picture: 'img2.jpeg',
  },
  {
    description: 'This is a project I made in a workshop',
    link: 'https://project3.com',
    name: 'Project 3',
    picture: 'img3.jpeg',
  },
  {
    description: 'This is a project I made in a workshop',
    name: 'Project 4',
  },
];

class AnotherPage extends React.Component {
  public render() {
    return (
      <Container>
        <Row>
          {projects.map(project => {
            return (
              <Col key={project.name} xs="4">
                <Card>
                  <CardImg
                    top={true}
                    width="100%"
                    src={
                      project.picture
                        ? images[project.picture]
                        : 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180'
                    }
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>{project.name}</CardTitle>
                    <CardText>{project.description}</CardText>
                    {project.link && (
                      <a href={project.link}>
                        <Button color="primary">Link</Button>
                      </a>
                    )}
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AnotherPage;
