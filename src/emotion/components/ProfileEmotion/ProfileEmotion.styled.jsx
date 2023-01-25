import styled from '@emotion/styled';

export const Profile = styled.div`
  display: block;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;

  border: 1px solid gray;
  border-radius: 8px;
  max-width: 320px;

  text-align: center;
`;

export const Description = styled.div`
  padding: 10px;
`;

export const Avatar = styled.img`
  display: block;
  margin: 48px auto 10px auto;

  max-width: 50%;
  border-radius: 50%;
`;

export const NameProfile = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  color: rgb(117, 115, 115);
`;

export const Location = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  color: rgb(117, 115, 115);
`;

export const InfoStats = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  background-color: aquamarine;
  /* height: 50px; */

  text-align: center;
  border-top: 1px solid rgb(117, 115, 115);
`;

export const ItemStats = styled.li`
  width: calc(100% / 3);
  padding: 15px;

  &:not(:last-child) {
    border-right: 1px solid rgb(117, 115, 115);
  }
`;

export const Label = styled.span`
  text-align: center;
  display: block;
  font-size: 20px;
  color: rgb(117, 115, 115);
`;

export const Quantity = styled.span`
  display: block;
  font-size: 22px;
  font-weight: bold;
`;
