import React from 'react';
import styled from 'styled-components'
import ProfileImg from './ProfileImg';
import SelfType from './SelfType'
import JaroisSN from './JaroisSN';

const MainCard = styled(({ className, theme }) => {
  return (
    <div className={className}>
      <ProfileImg />

      <h1 className="title">José Antonio Reyes</h1>

      <SelfType />
      <JaroisSN />
    </div>
  )
})`
  background: linear-gradient(to bottom, rgba(227,0,33,1) 0%,rgba(211,47,47,1) 40%,rgba(249,83,0,1) 100%);
  text-align: center;
  max-width: 480px;
  margin: auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px rgba(227, 0, 33, .7);
  border-radius: 10px;
  box-shadow: 0 8px  10px rgba(227, 0, 33, .2),
    0 10px 30px 15px rgba(227, 0, 33, .112) ;

  h1.title {
    padding-top: 40px;
    font-size: 22px;
    color: var(--primary-color-text);
    font-weight: 300;

    @media (min-width: ${ props => props.theme.phoneLand }) {
      font-size: 32px;
    }
  }
`

export default MainCard;
