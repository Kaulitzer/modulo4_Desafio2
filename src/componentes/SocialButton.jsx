import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialButton = ({ icon }) => {
  let iconComponent = null;

  switch (icon) {
    case 'facebook':
      iconComponent = <FaFacebook />;
      break;
    case 'github':
      iconComponent = <FaGithub />;
      break;
    case 'linkedin':
      iconComponent = <FaLinkedin />;
      break;
    default:
      iconComponent = null;
  }

  return iconComponent;
};

export default SocialButton;
