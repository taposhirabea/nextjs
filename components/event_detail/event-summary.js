import classes from './event-summary.module.css';

function EventSummary(props) {
  const { name } = props;

  return (
    <section className={classes.summary}>
      <h1>{name}</h1>
    </section>
  );
}

export default EventSummary;