import React from 'react';
import ReactDOM from 'react-dom';
import Bubbles from './Bubbles';
import Footer from './Footer';
import './styles.scss';

const App = () => {
  return (
    <>
      <div className="splashpage">
        <div className="skewbox-wrapper">
          <div className="skewbox" />
        </div>
        <div className="splashtext">
          <h1>Welcome!</h1>
          <p>I'm Gabriel Bodeen. </p>
          <p>
            I'm a full stack software engineer
            who builds tools to help people cooperate better.
          </p>
        </div>
        <nav><span>link&nbsp;1</span><span>link&nbsp;2</span><span>link&nbsp;3</span><span>link&nbsp;4</span></nav>
      </div>
      {/* <div className="bluerow"></div> */}
      {/* <div className="whitefield">
        <Bubbles />
      </div>
      <Footer /> */}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));