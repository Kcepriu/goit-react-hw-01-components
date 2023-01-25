import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;

  padding: 5px 10px;

  border: 1px solid gray;
  border-radius: 8px;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const Avatar = styled.img`
  border-radius: 8px;
`;
export const NameFriend = styled.p`
  font-size: 24px;
`;

export const Status = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
