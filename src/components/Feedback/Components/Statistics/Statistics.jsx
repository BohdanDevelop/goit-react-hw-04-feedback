import style from './Statistics.module.scss';
import PropTypes from 'prop-types';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={style.ul}>
      <li className={style.li}>
        <span>Good:{good}</span>
      </li>
      <li className={style.li}>
        <span>Neutral: {neutral}</span>
      </li>
      <li className={style.li}>
        <span>Bad: {bad}</span>
      </li>
      <li className={style.li}>
        {' '}
        <span>Total: {total}</span>
      </li>
      <li className={style.li}>
        <span>Positive feedback: {positivePercentage || 0}%</span>
      </li>
    </ul>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
