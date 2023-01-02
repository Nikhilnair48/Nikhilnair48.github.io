import * as React from "react"
// import { HeadFC, PageProps, withPrefix } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled, { createGlobalStyle, keyframes } from "styled-components"


  const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
  }
`
const HomeBackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #272727;
  opacity: .5;
`

const TypeWriter  = keyframes`
  from {
    width: 0;
  }
  to {
    width: 250px;
  }
`

const BlinkTextCursor  = keyframes`
  from {
    border-right-color: hsl(0, 0%, 80%);
  }
  to {
    border-right-color: transparent;
  }
`
const NameContainer = styled.span`
position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
  `

const HomeNameStyle = styled.h1`
  position: relative;
  color: hsl(0, 0%, 68%);
  font-weight: bold;
  font-family: "Anonymous Pro", monospace;
  letter-spacing: 7px;
  overflow: hidden;
  border-right: 2px solid hsl(0, 0%, 80%);
  white-space: nowrap;
  animation: ${TypeWriter} 4s steps(44) 1s 1 normal both,
  ${BlinkTextCursor} 500ms infinite;
`

const NavBarContainer = styled.nav`
z-index: 15;    
position: absolute;
    top: 2%;
    right: 0;
    left: auto;
    width: 319px;
    display: table;
    margin: 0 auto;
    transform: translateY(-50%);
    a {
      position: relative;
      width: 33.333%;
      display: table-cell;
      text-align: center;
      color: #949494;
      text-decoration: none;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-weight: bold;
      padding: 10px 20px;
      transition: 0.2s ease color;
    }
    
     a:before,
     a:after {
      content: "";
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      transition: 0.2s ease transform;
    }
    
     a:before {
      top: 0;
      left: 10px;
      width: 6px;
      height: 6px;
    }
    
     a:after {
      top: 5px;
      left: 18px;
      width: 4px;
      height: 4px;
    }
    
    #indicator {
      position: absolute;
      left: 5%;
      bottom: 0;
      width: 30px;
      height: 3px;
      background-color: #fff;
      border-radius: 5px;
      transition: 0.2s ease left;
    }
    
    a:hover {
      color: #fff;
    }
    
    a:hover:before,
    a:hover:after {
      transform: scale(1);
    }

    a:active {
      color: #fff;
    }
    
`
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle theme="purple" />
      {children}
    </React.Fragment>
  )
}

const BackgroundContainer = styled.div`
width: 100%;
height: 100%;
`

const NavBar = () => {
  return (
    <NavBarContainer>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Resume</a>
      <a href="#">Contact</a>
      <div id="indicator"></div>
    </NavBarContainer>
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <NavBar />
        <section id="home-page" style={{maxHeight: '100vh', maxWidth: '100vw'}}>
          <BackgroundContainer>
            <StaticImage style={{width: "100%"}} src="https://nikhil-personal.s3.ap-south-1.amazonaws.com/home.jpg" alt="A dinosaur" />
            <HomeBackgroundContainer />
          </BackgroundContainer>
          <NameContainer style={{ display: 'inline-flex' }}>
            <HomeNameStyle>Nikhil Nair</HomeNameStyle>
          </NameContainer>
        </section>
    </main>
    </Layout>
    
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
