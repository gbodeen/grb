import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Splash from './Splash';
// import AboutMe from './AboutMe';
// import Blog from './Blog';
// import Games from './Games';
// import Tools from './Tools';
import './styles/styles.scss';

const App = () => {
  const [page, setPage] = useState('splash');

  switch (page) {
    case 'splash': return <Splash />;
    case 'aboutme': return <AboutMe />;
    case 'blog': return <Blog />;
    case 'games': return <Games />;
    case 'tools': return <Tools />;
    default: return <Splash />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));