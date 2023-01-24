import { TitleTask } from 'components/TitleTask/TitleTask';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
// import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <div>
      <TitleTask textTitle="1 - Профіль соціальної мережі" />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <TitleTask textTitle="2- Секція статистики" />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <TitleTask textTitle="3 - Список друзів" />
      <FriendList friends={friends} />;
      <TitleTask textTitle="4 - Історія транзакцій" />
    </div>
  );
};
