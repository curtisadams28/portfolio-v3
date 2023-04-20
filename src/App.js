import Navigation from './components/navigation/navigation';
import Button from './components/button/button';

function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="hero-section section">

        <div className='section-content hero-content'>
          <h1 className='hero-heading'>Curtis Adams</h1>
          <p className='hero-subheading'>Front End Developer</p>
        </div>
        <div className='background-gradient'>

        </div>

      </div>
      <div className='my-work-section section'>
        <div className='section-content hero-content'>
          <h1 className='heading'>My Work</h1>
        </div>

      </div>
    </div>
  );
}

export default App;
