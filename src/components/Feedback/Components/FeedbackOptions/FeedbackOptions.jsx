import style from './FeedbackOptions.module.scss';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const FeedbackOptions = ({ options }) => {
  const buttonArray = options.map(({ name, value, setValue }) => {
    return (
      <button
        className={style.button}
        onClick={() => setValue(value + 1)}
        type="button"
        key={nanoid()}
      >
        {name}
      </button>
    );
  });
  return <div>{buttonArray}</div>;
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      setValue: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default FeedbackOptions;
