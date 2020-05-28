import React from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

// Custom Components
import Header from './Header';
import SubtleAsianDating from './SubtleAsianDating';

function Main() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Container>
        <Header />
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
