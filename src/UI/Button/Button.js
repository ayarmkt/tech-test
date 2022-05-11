import classes from './Button.module.css';

const Button = ({ text, className }) => {
  return <button className={`${classes.btn} ${className}`}>{text}</button>;
};

export default Button;
