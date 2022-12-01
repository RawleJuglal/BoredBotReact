import React from 'react'
import './App.css'
import { Button } from 'react-bootstrap'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [state, setState] = React.useState({message:'You still need to ask'})

  function handleClick(){
    fetch('https://www.boredapi.com/api/activity')
      .then(res => res.json())
      .then(data => {
        setState((prevState)=>{
          return {...prevState, message:data.activity}
        })
      })
  }

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
  >
    <Container className="--app-app-container">
      <Row className="--app-app-row --app-desc-row">
        <h1 className='--app-app-desc'>Click on Bored Bot for a new idea what to do!</h1>
      </Row>
      <Row className="--app-app-row --app-robot-row">
        <Col className="--app-robot-container">
          <div className="cute-robot-v1" onClick={handleClick}>
              <div className="circle-bg">
                  <div className="robot-ear left"></div>
                  <div className="robot-head">
                      <div className="robot-face">
                          <div className="eyes left"></div>
                          <div className="eyes right"></div>
                          <div className="mouth"></div>
                      </div>
                  </div>
                  <div className="robot-ear right"></div>
                  <div className="robot-body"></div>
              </div>
          </div>
        </Col>
      </Row>
      <Row className="--app-app=row --app-activity-row">
        <Col>
          <p className="--app-activity">{state.message}</p>
        </Col>
      </Row>
    </Container>
  </ThemeProvider>
  )
}

export default App
