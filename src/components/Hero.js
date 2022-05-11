import classes from './Hero.module.css';
import Button from '../UI/Button/Button';

const Hero = () => {
  return (
    <div className={classes.hero}>
      <h1>Where hiring comes together.</h1>
      <p>
        Everything you need to organise your hiring and make a great impression.
      </p>
      <Button
        className={classes['get-started-btn']}
        text='Get started — It’s free!'
      />
    </div>
  );
};

export default Hero;
