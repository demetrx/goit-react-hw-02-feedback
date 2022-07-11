import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const Output = {
  good: 'Good',
  neutral: 'Neutral',
  bad: 'Bad',
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(opt => (
        <Button key={opt} name={opt} onClick={onLeaveFeedback}>
          {Output[opt]}
        </Button>
      ))}
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
