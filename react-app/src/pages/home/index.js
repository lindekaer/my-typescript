/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

import React, { Component, Fragment } from 'react'
import { Heading } from '../../components/Typography'
import styled, { css } from 'styled-components'
import './Home.css'

/*
-----------------------------------------------------------------------------------
|
| Main component
|
-----------------------------------------------------------------------------------
*/

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero>
          <HeroBackground src={require('../../img/polygons.svg')} />
          <Container>
            <Heading>Hello world!</Heading>
            <p>Lorem ipsum and more.</p>
            <Row>
              <Column>
                <FancyLink href="#hello">
                  <h2>Browse users</h2>
                  <p>With our tools you can easily browse anywhere</p>
                </FancyLink>
              </Column>
              <Column>
                <FancyLink href="#hello">
                  <h2>Browse users</h2>
                  <p>With our tools you can easily browse anywhere</p>
                </FancyLink>
              </Column>
              <Column>
                <FancyLink href="#hello">
                  <h2>Browse users</h2>
                  <p>With our tools you can easily browse anywhere</p>
                </FancyLink>
              </Column>
            </Row>
          </Container>
        </Hero>
      </Fragment>
    )
  }
}

/*
-----------------------------------------------------------------------------------
|
| Styled components
|
-----------------------------------------------------------------------------------
*/

const unit = 4
const transition = property => `transition: ${property} 0.125s ease-in-out`

const Hero = styled.div`
  position: relative;
  background: linear-gradient(to left, #ffd200, #f7971e);
  color: rgba(255, 255, 255, 0.97);
  padding: 4rem 0;
  font-weight: 500;
  text-align: center;

  h1 {
    margin: 0;
  }
`

const HeroBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  height: 100%;
`

const Link = ({ href, children, className }) => (
  <a className={className} href={href}>
    {children}
  </a>
)

const media = {
  mobile: (...args) => css`
    @media (max-width: 800px) {
      ${css(...args)};
    }
  `,
}

const FancyLink = styled(Link)`
  display: block;
  padding: 1em;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.25);
  cursor: pointer;
  text-align: left;
  border-radius: 3px;
  text-decoration: none;
  color: inherit;
  ${transition('background')};

  &:hover,
  &:active,
  &:focus {
    background: rgba(255, 255, 255, 0.3);
  }

  h2 {
    margin: 0 0 0.5rem 0;
  }

  p {
    font-size: 0.9rem;
    margin: 0;
  }
`

const Container = styled.div`
  position: relative;
  max-width: 960px;
  margin: 0px auto;
  padding: 0 1rem 0 1rem;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;

  ${media.mobile`
    flex-direction: column;
  `};
`

const Column = styled.div`
  padding: 0 2rem;

  &:first-child,
  &:last-child {
    padding: 0;
  }

  ${media.mobile`
    padding: 1rem 0;
  `};
`
