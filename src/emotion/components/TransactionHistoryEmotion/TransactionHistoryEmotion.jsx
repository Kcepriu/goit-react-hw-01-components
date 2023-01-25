import PropTypes from 'prop-types';
import {
  TableTransactionHistory,
  RowTable,
} from './TransactionHistoryEmotion.styled';

export const TransactionHistoryEmotion = ({ items }) => {
  return (
    <TableTransactionHistory>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((element, index) => (
          <RowTable key={element.id} indexRow={index}>
            <td>{element.type}</td>
            <td>{element.amount}</td>
            <td>{element.currency}</td>
          </RowTable>
        ))}
      </tbody>
    </TableTransactionHistory>
  );
};

TransactionHistoryEmotion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
