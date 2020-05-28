import React from 'react';

// Bootstrap
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import SocialIcon from '../SocialIcon';

const dataSciencePresentationUrl = 'https://docs.google.com/presentation/d/e/2PACX-1vS6ga2yJyG4DLHy3NqM45bMSaWShGB8QL8UWTp_AIHuywmi9bT1lAvE9VftSEF6QdJfw8IVJLOL5IXH/pub?start=false&loop=false&delayms=3000&slide=id.p1';

const data = {
  title: 'Subtle Asian Dating Score Test',
  description: 'A quiz to measure how dateable you are in the Subtle Asian Dating community.',
  details: [
    {
      type: 'text',
      text: 'Built within 4 hours',
    },
    {
      type: 'text',
      text: 'Over 20,000 visits',
    },
    {
      type: 'link',
      text: 'Data Analysis Presentation',
      link: dataSciencePresentationUrl,
    },
    {
      type: 'link',
      text: 'Data Analysis Code',
      link: 'https://github.com/simonfong6/ECE-143-Team-6',
    },
  ],
};

function SubtleAsianDating() {
  const { title, description, details } = data;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {
          details.map((detail) => {
            switch (detail.type) {
              case 'text':
                return (
                  <ListGroupItem>
                    {detail.text}
                  </ListGroupItem>
                );
              case 'link':
                return (
                  <ListGroupItem>
                    <Card.Link href={detail.link}>
                      {detail.text}
                    </Card.Link>
                  </ListGroupItem>
                );
              default:
                return null;
            }
          })
        }
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
  );
}

export default SubtleAsianDating;
