import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ id, avatar, name, isOnline }) => {
  return (
    <ul className="friend-list">
      <li className="item">
        <span className="status"></span>
        <img className="avatar" src="" alt="User avatar" width="48" />
        <p className="name"></p>
      </li>
    </ul>
  );
};
