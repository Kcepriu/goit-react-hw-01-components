import PropTypes from 'prop-types';

import {
  Profile,
  Description,
  Avatar,
  NameProfile,
  Tag,
  Location,
  InfoStats,
  Label,
  Quantity,
  ItemStats,
} from './ProfileEmotion.styled';

export const ProfileEmotion = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Profile>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <NameProfile>{username}</NameProfile>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <InfoStats>
        <ItemStats>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </ItemStats>
        <ItemStats>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </ItemStats>
        <ItemStats>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </ItemStats>
      </InfoStats>
    </Profile>
  );
};

ProfileEmotion.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }).isRequired,
};
