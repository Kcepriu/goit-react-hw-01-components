import styled from '@emotion/styled';

export const CardStatistics = styled.section`
  display: block;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;

  border: 1px solid gray;
  border-radius: 8px;
  max-width: 320px;

  text-align: center;
`;
export const TitleStatistics = styled.h2`
  margin-bottom: 20px;
  padding-top: 20px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 18px;
`;

export const Percentage = styled.span`
  font-size: 22px;
`;
