import style from './FeedbackOptions.module.scss';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const buttonArray = options.map(option => {
    const capitalOption = option.charAt(0).toUpperCase() + option.slice(1);
    return (
      <button
        className={style.button}
        onClick={() => onLeaveFeedback(option)}
        type="button"
        key={nanoid()}
      >
        {capitalOption}
      </button>
    );
  });
  return <div>{buttonArray}</div>;
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
