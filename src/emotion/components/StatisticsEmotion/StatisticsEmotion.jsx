import PropTypes from 'prop-types';
import getRandomHexColor from 'utils/getRandomColor';
import {
  CardStatistics,
  TitleStatistics,
  StatList,
  Item,
  Percentage,
} from './StatisticsEmotion.styled';

export const StatisticsEmotion = ({ title, stats }) => {
  return (
    <CardStatistics>
      {title && <TitleStatistics>{title}</TitleStatistics>}

      <StatList>
        {stats.map(element => (
          <Item
            key={element.id}
            style={{
              backgroundColor: `${getRandomHexColor()}`,
            }}
          >
            <span className="label">{element.label}</span>
            <Percentage>{element.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </CardStatistics>
  );
};

StatisticsEmotion.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
