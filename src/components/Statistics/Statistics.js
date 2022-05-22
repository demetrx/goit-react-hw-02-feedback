import PropTypes from 'prop-types';
import { Info } from './Statistics.styled';

const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <>
      <Info>Good: {good}</Info>
      <Info>Neutral: {neutral}</Info>
      <Info>Bad: {bad}</Info>
      <Info>Total: {total}</Info>
      <Info>Positive feedback: {positivePercentage}</Info>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
