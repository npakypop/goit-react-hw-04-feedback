import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul>
        {options.map(option => (
          <li key={option}>
            <button type="button" name={option} onClick={onLeaveFeedback}>
              {option}
            </button>
          </li>
        ))}
      </ul>

      {/* <h1>Please leave feadack</h1> */}
      {/* <ul>
        <li>
          <button type="button" name="good" onClick={onLeaveFeedback}>
            Good
          </button>
        </li>
        <li>
          <button type="button" name="neutral" onClick={onLeaveFeedback}>
            Neutral
          </button>
        </li>
        <li>
          <button type="button" name="bad" onClick={onLeaveFeedback}>
            Bad
          </button>
        </li>
      </ul> */}
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
