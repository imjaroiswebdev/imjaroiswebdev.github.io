import React from 'react';
import styled from 'styled-components'
import Emoji from './Emoji';
import heart from '../assets/images/emoji/heart.png';
import reactEmoji from '../assets/images/emoji/react.png';

const Footer = styled(({ className }) => {
  return (
    <div className={className + " ma"}>
      { (new Date()).toLocaleDateString('es').split('/')[2] } | Made with<Emoji className="heart" icon={heart} size="14px" title="LOVE" />
      using ReactJs<Emoji icon={reactEmoji} size="14px" title="ReactJs" />
      in Santiago by
      <a
        href="https://github.com/imjaroiswebdev/"
        title="Github Repository of this site"> José Antonio Reyes.
      </a>
    </div>
  )
})`
  text-align: center;
  padding-top: 40px;
  color: var(--primary-text-color);
  font-size: 12px;
  font-family: var(--inconsolata);
  max-width: 300px;
  line-height: 2;

  .heart {
    color: var(--primary-color);
    margin: 0 5px;
    animation: beat 1s 30 ease-in;
  }

  a:link,
  a:visited,
  a:active {
    text-decoration: none;
    color: var(--primary-color-dark);
  }

  @keyframes beat {
    0%, 100% {
      transform: scale(1)
    }
    50% {
      transform: scale(1.05)
    }
  }
`

export default Footer;
