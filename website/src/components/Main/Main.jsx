import React from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';

// Custom Components
import Header from '../Header';
import SubtleAsianDating from '../SubtleAsianDating';
import MoreProjects from '../MoreProjects';

import './Main.css';

function Main() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Container>
        <Header />
        <div className="card-deck">
          <SubtleAsianDating />
          <MoreProjects />
        </div>
      </Container>
    </div>
  );
}

export default Main;
