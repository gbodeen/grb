import React from 'react';
import ReactDOM from 'react-dom';
import Bubbles from './Bubbles';
import Footer from './Footer';
import './styles.scss';

const App = () => {
  return (
    <>
      <div className="splashpage">
        <div className="splashbox">
        </div>
        <div className="splashtext">
          <h1>Welcome</h1>
          <p>Inclusive, shared vocabulary; thought leadership inclusion, and cultivate theory of change disrupt academic. Gender rights, systems thinking co-create, shared unit of analysis engaging paradigm humanitarian. Changemaker program area radical compelling LGBTQ+ framework innovate. State of play, resist academic; shine policymaker catalyze. Low-hanging fruit greenwashing, radical emerging indicators data the resistance effective altruism boots on the ground. Strengthening infrastructure vibrant outcomes compassion citizen-centered shine, incubator scalable. Game-changer; justice impact radical boots on the ground philanthropy issue outcomes. </p>
        </div>
        <nav><span>link 1</span><span>link 2</span><span>link 3</span><span>link 4</span></nav>
      </div>
      <div className="bluerow"></div>
      <div className="whitefield">
        <Bubbles />
      </div>
      <Footer />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));