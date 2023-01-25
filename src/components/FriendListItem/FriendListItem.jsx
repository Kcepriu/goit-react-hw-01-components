import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ friend }) => {
  return (
    <li className={css.item}>
      <span
        className={clsx(friend.isOnline ? css.statusOnLine : css.statusOffLine)}
      ></span>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.exact({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
