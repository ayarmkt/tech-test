import './App.css';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Reassurance from './components/Reassurance';
import Section from './UI/Section/Section';

function App() {
  return (
    <div className='container'>
      <NavBar />
      <Hero />
      <Reassurance />
      <img alt='screen' />
      <Section
        className='section organize'
        label='Organize'
        title='Organize your hiring'
        text='A hiring flow you can wrap your head around.'
      />
      <Section
        className='section collaborate'
        label='Collaborate'
        title='Collaborate with your team'
        text='It’s easy for your whole team to join in on hiring.'
      />
      <Section
        className='section connect'
        label='Connect'
        title='Connect with candidates'
        text='Stand out and show candidates who you are.'
      />
      {/* PUSH SECTION */}
      {/* FURTHER DETAILS */}
      {/* START TRIAL SECTION */}
    </div>
  );
}

export default App;
