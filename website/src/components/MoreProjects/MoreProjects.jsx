import React from 'react';

import Card from 'react-bootstrap/Card';

const style = {
  width: '18rem',
  marginLeft: 'auto',
  marginRight: 'auto',
};

function MoreProjects() {
  return (
    <Card style={style}>
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
  );
}

export default MoreProjects;
