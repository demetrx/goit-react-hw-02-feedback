import PropTypes from 'prop-types';
import { Input } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback, output }) => {
  return (
    <>
      {options.map(opt => (
        <Input
          key={opt}
          type="button"
          name={opt}
          value={output[opt]}
          onClick={onLeaveFeedback}
        />
      ))}
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  output: PropTypes.object.isRequired,
};
