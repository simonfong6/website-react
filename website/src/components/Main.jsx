import React from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

// Custom Components
import SocialIcon from './SocialIcon';
import SubtleAsianDating from './SubtleAsianDating';

const dataSciencePresentationUrl = 'https://docs.google.com/presentation/d/e/2PACX-1vS6ga2yJyG4DLHy3NqM45bMSaWShGB8QL8UWTp_AIHuywmi9bT1lAvE9VftSEF6QdJfw8IVJLOL5IXH/pub?start=false&loop=false&delayms=3000&slide=id.p1';

function Main() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Container>
        <h1>Simon Fong</h1>
        <SocialIcon
          icon="envelope-square"
          link="mailto:simonfong6@gmail.com"
          tooltip="Email"
        />
        <SocialIcon
          icon="github-square"
          link="https://github.com/simonfong6"
          tooltip="GitHub"
        />
        <SocialIcon
          icon="linkedin-square"
          link="https://linkedin.com/in/simonfong6"
          tooltip="LinkedIn"
        />
        <SocialIcon
          icon="file"
          link="/resume.pdf"
          tooltip="Resume"
        />
        <div className="card-deck">
          <SubtleAsianDating />
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Subtle Asian Dating Score Test</Card.Title>
              <Card.Text>
                A quiz to measure how dateable you are in the Subtle Asian Dating
                community.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                Built within 4 hours
              </ListGroupItem>
              <ListGroupItem>
                Over 20,000 visits
              </ListGroupItem>
              <ListGroupItem>
                <Card.Link href={dataSciencePresentationUrl}>
                  Data Analysis Presentation
                </Card.Link>
              </ListGroupItem>
              <ListGroupItem>
                <Card.Link href="https://github.com/simonfong6/ECE-143-Team-6">
                  Data Analysis Code
                </Card.Link>
              </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <SocialIcon
                icon="globe"
                link="http://subtleasiandating.org/"
                tooltip="subtleasiandating.org"
              />
              <SocialIcon
                icon="github-square"
                link="https://github.com/simonfong6/sad-score"
                tooltip="Code"
              />
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>
                More projects to come...
                <span role="img" aria-label="smileyface">😊</span>
              </Card.Title>
              <Card.Text>
                Please check my
                {' '}
                <a href="https://github.com/simonfong6">GitHub</a>
                {' '}
                for now.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default Main;
