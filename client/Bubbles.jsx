import React from 'react';
import Bubble from './Bubble';

const imgs = [
  'genuineme.jpg',
  'mokapot.jpg',
  'beertabled.jpg',
  'peekaboo.jpg',
  'parallelpie.jpg',
  'trianglepark.jpg',
  'windybeach.jpg',
  'hornhat.jpg'
]

const links = [
  'Bio',
  'Résumé',
  'Blog',
  'Portfolio',
  'App 1',
  'App 2',
  'App 3',
  'App 4'
]

const Bubbles = () => (
  <div className="bubbles">
    {links.map((link, i) => {
      return <Bubble img={imgs[i]} link={link} key={i} />
    })}
  </div>
)

export default Bubbles;