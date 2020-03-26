import React from 'react';
import './index.scss';

export const SocialBtnsContainer = props => {
  return <div className="social__btn--container">{props.children}</div>;
};

export const SocialLogo = ({ src }) => {
  return <img src={src} className="social__img" alt="social-logo"></img>;
};

export const SocialButton = props => {
  return (
    <a
      className="social__btn--link"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
};
