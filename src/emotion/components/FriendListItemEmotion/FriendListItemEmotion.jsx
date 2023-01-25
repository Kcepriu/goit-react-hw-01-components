import PropTypes from 'prop-types';
import {
  Item,
  Avatar,
  NameFriend,
  Status,
} from './FriendListItemEmotion.styled';

export const FriendListItemEmotion = ({ friend }) => {
  return (
    <Item>
      <Status isOnline={friend.isOnline}></Status>
      <Avatar src={friend.avatar} alt={friend.name} width="48" />
      <NameFriend>{friend.name}</NameFriend>
    </Item>
  );
};

FriendListItemEmotion.propTypes = {
  friend: PropTypes.exact({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
