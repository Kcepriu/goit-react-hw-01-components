import PropTypes from 'prop-types';
import { FriendList } from './FriendListEmotion.styled';

import { FriendListItemEmotion } from 'emotion/components/FriendListItemEmotion/FriendListItemEmotion';

export const FriendListEmotion = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(element => (
        <FriendListItemEmotion key={element.id} friend={element} />
      ))}
    </FriendList>
  );
};

FriendListEmotion.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
