import React from 'react';

import SocialIcon from '../SocialIcon';

const data = {
  icons: [
    {
      icon: 'envelope-square',
      link: 'mailto:simonfong6@gmail.com',
      tooltip: 'Email',
    },
    {
      icon: 'github-square',
      link: 'https://github.com/simonfong6',
      tooltip: 'GitHub',
    },
    {
      icon: 'linkedin-square',
      link: 'https://linkedin.com/in/simonfong6',
      tooltip: 'LinkedIn',
    },
    {
      icon: 'file',
      link: '/resume.pdf',
      tooltip: 'Resume',
    },
  ],
};

function Header() {
  const { icons } = data;

  return (
    <div>
      <h1>Simon Fong</h1>
      {
        icons.map((icon) => (
          <SocialIcon
            key={icon.link}
            icon={icon.icon}
            link={icon.link}
            tooltip={icon.tooltip}
          />
        ))
      }
    </div>
  );
}

export default Header;
