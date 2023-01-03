import * as React from "react"
// import { HeadFC, PageProps, withPrefix } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled, { createGlobalStyle, keyframes } from "styled-components"


  const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    width: 100vw;
    max-width:100%;
    height: 100vh;
  }
`
const HomeBackgroundContainer = styled.div`
  width: 100vw;
  max-width:100%;
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
position: fixed;
    top: 5%;
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

const StyledResumeContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 5rem;
a {
  text-decoration: none;
  color:
}
`

const AboutMeSection = styled.p`
color: #E2E1DE;
font-family: Lora, serif;
a {
  color: palegreen;
  text-decoration: none;
}
`

const StaticImageStyle = styled.div`
  display: flex;
  flex: 50%;
  padding: 5rem;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
    height: auto;
    border-radius: 1rem;
    display: block;
    margin: 0 auto;
  }
`

const StyledBioSection = styled.div`
display: flex;
flex: 50%;
padding: 5rem;
`

const StyledContactSection = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 5rem;
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
        <section id="home" style={{height: '100%', width: '100%', boxSizing: 'border-box'}}>
            <StaticImage style={{width: "100%", height: "100%"}} src="https://nikhil-personal.s3.ap-south-1.amazonaws.com/home.jpg" alt="A nice, little picture" />
            <HomeBackgroundContainer />
          <NameContainer style={{ display: 'inline-flex' }}>
            <HomeNameStyle>Nikhil Nair</HomeNameStyle>
          </NameContainer>
        </section>
        <section id="about" style={{height: '100%', width: '100%', boxSizing: 'border-box', background: "#1D1E21"}}>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <StyledBioSection>
              <AboutMeSection>
                    Welcome to my station on the Internet!
                    <br /> <br />
                    I’ve been a regular in the Tech industry since 2015. Though an admirer of the advances in my field, I enjoy discovering exciting intersections of technology, education and space; biotech is cool too. If you’re looking for collaborations in those areas, feel free to get in touch.
                    <br /> <br />
                    One of my greatest sources of joy has been collaborations with small, motivated teams on a highly focused idea, which has influenced my decision to work at startups since 2018. As a part of that choice, I was a co-founder and CTO at <a target="_blank" href="https://play.google.com/store/apps/details?id=ai.supersub.training.app&hl=en_IN&gl=US">Supersub</a>, a SportsTech startup, as we gained our first 50,000 users. Currently, I’m contributing to the Engineering team at <a target="_blank" href="https://www.truefit.com/">True Fit Corporation</a> as a Senior Software Engineer.
                </AboutMeSection>
            </StyledBioSection>
            <StaticImageStyle>
              <StaticImage src="https://nikhil-personal.s3.ap-south-1.amazonaws.com/me.jpeg" alt="That would've been me!"  />
            </StaticImageStyle>
          </div>
        </section>
        <section id="resume" style={{height: '100%', width: '100%', boxSizing: 'border-box', background: "#955E42"}}>
          <StyledResumeContainer>
            <a style={{color: '#E2E1DE', fontFamily: 'Lora, serif', background: "#3C153B", padding: "1rem", borderRadius: ".5rem"}} href="https://nikhil-personal.s3.ap-south-1.amazonaws.com/Nikhil+Nair.pdf" target="_blank">View Resume</a>
          </StyledResumeContainer>
        </section>
        <section id="contact" style={{height: '100%', width: '100%', boxSizing: 'border-box', background: "#70A288"}}>
          <StyledContactSection>
            <h2>
            Coming Soon
            </h2>
          </StyledContactSection>
        </section>
    </main>
    </Layout>
    
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
