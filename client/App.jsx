import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Splash from './Splash';
import AboutMe from './AboutMe';
// import Blog from './Blog';
// import Games from './Games';
// import Tools from './Tools';
import './styles/styles.scss';

const App = () => {
  const [page, setPage] = useState('Splash');

  switch (page) {
    case 'Splash': return <Splash setPage={setPage} />;
    case 'About Me': return <AboutMe />;
    case 'Blog': return <Blog />;
    case 'Games': return <Games />;
    case 'Tools': return <Tools />;
    default: return <Splash setPage={setPage} />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));