import classes from './Hero.module.css';
import Button from '../UI/Button/Button';

const Hero = () => {
  return (
    <div className={classes.hero}>
      <h1>
        Where hiring
        <br />
        comes together.
      </h1>
      <p>
        Everything you need to organise your hiring
        <br />
        and make a great impression.
      </p>
      <Button
        className={classes['get-started-btn']}
        text='Get started — It’s free!'
      />
    </div>
  );
};

export default Hero;
