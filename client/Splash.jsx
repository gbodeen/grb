import React from 'react';

const Splash = () => {
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
        <nav><span>About&nbsp;Me</span><span>Blog</span><span>Games</span><span>Tools</span></nav>
      </div>
    </>
  )
}

export default Splash;