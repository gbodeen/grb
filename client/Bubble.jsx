import React from 'react';

const Bubble = ({ img, link }) => (
  <div className="bubble" style={{ 'backgroundImage': `url(pics/${img})` }} >{link}</div>
)

export default Bubble;