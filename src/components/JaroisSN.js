import React from 'react';
import styled from 'styled-components'
import logoLowPoly from '../assets/images/logo-lowPoly_270_alpha.png'

const JaroisSN = styled(({ className, theme }) => {
  return (
    <div className={className}>
      <div className="row">
        <a
          className="link"
          title="My Instagram @imajaroiswebdev"
          href="https://urlgeni.us/instagram/9Dwc" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram fa-fw fa-lg" aria-hidden="false"></i>
        </a>
        <a
          className="link"
          title="My source code on Github"
          href="https://github.com/imjaroiswebdev" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square fa-fw fa-lg" aria-hidden="false"></i>
        </a>
        <a
          className="link"
          title="My answers in Quora"
          href="https://www.quora.com/profile/Jose-Antonio-Reyes-Ruiz" target="_blank" rel="noopener noreferrer"><i className="fa fa-quora fa-fw fa-lg" aria-hidden="false"></i>
        </a>
        <a
          className="link"
          title="Send me an email"
          href="mailto:imajroiswebdev@gmail.com"><i className="fa fa-envelope fa-fw fa-lg" aria-hidden="false"></i>
        </a>
      </div>
      <div className="username">@imjaroiswebdev</div>
      <div className="logo ma">
        <img
          className="img-responsive"
          src={logoLowPoly} alt="logotipo @imjaroiswebdev"
        />
      </div>
    </div>
  )
})`
  padding-top: 0px;

  @media (min-height: ${props => props.theme.phoneLand}) {
    padding-top: 30px;
  }

  .row {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
  }

  .link {
    padding: 0 5px;
    color: var(--accent-color);
    transition: all .3s ease-in;

    &:link, &:visited, &:active {
      text-decoration: none;
    }

    &:hover {
      color: var(--primary-color-light);
    }
  }

  .link >  i {
    filter: drop-shadow(0 0 5px rgba(227, 0, 33, .8));
  }

  .username {
    color: var(--accent-color);
    font-size: .9em;
    font-weight: 300;
    font-style: italic;
    transition: all .3s ease-in;
  }

  .logo {
    width: 100px;
  }
`

export default JaroisSN;
