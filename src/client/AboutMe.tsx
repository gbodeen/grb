import React, { useState } from 'react';
import BubbleSpread from './BubbleSpread';
// import Bubble from './Bubble';

const links = [
  'Bio',
  'Résumé',
  'Portfolio',
  'LinkedIn',
  'Instagram',
  'Facebook'
]

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

const AboutMe = () => {
  return <BubbleSpread links={links} imgs={imgs} />;
}

export default AboutMe;