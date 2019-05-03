import React from 'react';
import Bubble from './Bubble';

const BubbleSpread = ({ links, imgs }) => (
  <div className="bubbles">
    {links.map((link, i) => {
      return <Bubble img={imgs[i]} link={link} key={i} />
    })}
  </div>
)

export default BubbleSpread;