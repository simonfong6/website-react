import React from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

// Custom Components
import SocialIcon from './SocialIcon';
import SubtleAsianDating from './SubtleAsianDating';

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
