import styled from '@emotion/styled';
// export const Profile = styled.div`

export const TableTransactionHistory = styled.table`
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;

  border-collapse: collapse;
  border: 1px solid rgb(87, 87, 87);

  width: 540px;

  text-align: center;
  list-style: none;

  thead {
    background-color: rgb(49, 62, 245);
    color: white;
    font-size: 18px;
  }

  tbody {
    color: rgb(87, 87, 87);
    font-size: 16px;
  }

  th,
  td {
    border: 1px solid gray;
  }

  td::first-letter {
    text-transform: uppercase;
  }
`;

export const RowTable = styled.tr`
  background-color: ${props =>
    props.indexRow % 2 === 1 ? '#66cdaa' : '#ffffff'};
`;
