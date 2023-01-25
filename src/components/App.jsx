import { TitleTask } from 'components/TitleTask/TitleTask';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import { ProfileEmotion } from 'emotion/components/ProfileEmotion/ProfileEmotion';
import { StatisticsEmotion } from 'emotion/components/StatisticsEmotion/StatisticsEmotion';
import { TransactionHistoryEmotion } from 'emotion/components/TransactionHistoryEmotion/TransactionHistoryEmotion';
import { FriendListEmotion } from 'emotion/components/FriendListEmotion/FriendListEmotion';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <div>
      {/* * Task 1 */}
      <TitleTask textTitle="1 - Профіль соціальної мережі" />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* * Task 2 */}
      <TitleTask textTitle="2- Секція статистики" />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      {/* * Task 3 */}
      <TitleTask textTitle="3 - Список друзів" />
      <FriendList friends={friends} />
      {/* * Task 4 */}
      <TitleTask textTitle="4 - Історія транзакцій" />
      <TransactionHistory items={transactions} />
      {/* * TEST EMOTION */}
      <TitleTask textTitle="TEST EMOTION" />
      {/* * Task 1 */}
      <TitleTask textTitle="1 (EMOTION) - Профіль соціальної мережі " />
      <ProfileEmotion
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* * Task 2 */}
      <TitleTask textTitle="2 (EMOTION) - Секція статистики" />
      <StatisticsEmotion title="Upload stats" stats={data} />
      <StatisticsEmotion stats={data} />
      {/* * Task 3 */}
      <TitleTask textTitle="3 (EMOTION) - Список друзів" />
      <FriendListEmotion friends={friends} />

      {/* * Task 4 */}
      <TitleTask textTitle="4 (EMOTION) - Історія транзакцій" />
      <TransactionHistoryEmotion items={transactions} />
    </div>
  );
};
