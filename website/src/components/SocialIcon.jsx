import React from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const renderTooltip = (tooltip) => (
  <div
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      padding: '2px 10px',
      color: 'white',
      borderRadius: 3,
    }}
  >
    {tooltip}
  </div>
);


export default function SocialIcon({ tooltip, link, icon }) {
  return (
    <OverlayTrigger
      placement="top-start"
      delay={{ show: 250, hide: 250 }}
      overlay={renderTooltip(tooltip)}
    >
      <a
        className="btn btn-social-icon"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        <span className={`fa fa-${icon} fa-2x`} />
      </a>
    </OverlayTrigger>
  );
}

SocialIcon.propTypes = {
  tooltip: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
