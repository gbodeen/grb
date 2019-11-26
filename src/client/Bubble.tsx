import React from 'react';

const Bubble = ({ img, link }: { img: string, link: string }) => (
  <div className="bubble" style={{ 'backgroundImage': `url(pics/${img})` }} >{link}</div>
)

export default Bubble;