import classes from './Section.module.css';

const Section = ({ className, label, title, text }) => {
  return (
    <div className={`${classes['section-container']} ${className}`}>
      <div className={classes.content}>
        <h3>{label}</h3>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={classes['image-section']}></div>
    </div>
  );
};

export default Section;
