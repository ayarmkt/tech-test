import classes from './NavBar.module.css';
import Button from '../UI/Button/Button';

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      {/* A OR BUTTON? */}
      <img alt='company logo' />
      <ul className={classes['nav-menu']}>
        <li>Product V</li>
        <li>Pricing</li>
        <li>Customers</li>
        <li>Learn V</li>
      </ul>
      <div className={classes['action-btns']}>
        <button className={classes.loginBtn}>Log in</button>
        <Button className={classes.trialBtn} text='Start 14-day trial' />
      </div>
    </nav>
  );
};

export default NavBar;
