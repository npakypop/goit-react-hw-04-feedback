export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {/* <h1>Please leave feadack</h1> */}
      <ul>
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
      </ul>
    </>
  );
};
