import React, { useEffect } from 'react';
import { setter } from './types';

const Splash = ({ setPage }: { setPage: setter<string> }) => {

  const addLinksInNav = () => {
    document.querySelectorAll("nav span").forEach(span => {
      span.addEventListener("click", () => setPage(span.textContent || ''));
    })
  }
  useEffect(addLinksInNav);

  return (
    <>
      <div className="splashpage">
        <div className="skewbox-wrapper">
          <div className="skewbox" />
        </div>
        <div className="splashtext">
          <p>Hi, I'm</p>
          <h1>Gabriel Bodeen</h1>
          <p>
            I build tools using web technologies to help people work together.
          </p>
        </div>
        <nav><span>About&nbsp;Me</span><span>Blog</span><span>Games</span><span>Tools</span></nav>
      </div>
    </>
  )
}

export default Splash;