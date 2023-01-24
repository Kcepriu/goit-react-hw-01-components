import PropTypes from 'prop-types';
import css from './TitleTask.module.css';

export const TitleTask = ({ textTitle }) => {
  return <h2 className={css.title}>{textTitle}</h2>;
};

TitleTask.propTypes = {
  textTitle: PropTypes.string.isRequired,
};
