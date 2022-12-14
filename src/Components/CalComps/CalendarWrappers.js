import styled from 'styled-components';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const DatePickerWrapper = styled(DatePicker)`
  margin-right: 4px;
  width: 400px;
  left: 35%;
  top: 15px;
  background-color: #FFFFFF;
  border-radius: 8px;
`;

export const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;
export const TextWrapper = styled.span`
  font-size: 32px;
`;
export const TitleWrapper = styled(TextWrapper)`
  font-weight: regular;
  margin-right: 8px;
  padding: 12px;

`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  //grid-template-rows: repeat(6, 1fr);
  grid-gap: 0.5px;
  background-color: #1976d2;
  `;

export const CellWrapper = styled.div`
  min-width: 100px;
  min-height: ${props=> props.isHeader ? '40px' : '80px'};
  background-color: #FFFFFF;
`;
export const CellRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifyContent ? props.justifyContent: 'flex-start'};
`;
export const DayWrapper = styled.div`
  height: 33px;
  width: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  color: #1976d2;
`;
export const DayOfWeekWrapper = styled(DayWrapper)`
  position: relative;
  left: 40%;
  color: #1976d2;
`;
export const ShowDayWrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
  color: #FFFFFF;
`;
export const EventListWrapper = styled('ul')`
  margin: unset;
  list-style-position: inside;
  padding-left: 4px;
  color: #FFFFFF;
`;
export const LiWrapper = styled.li`
  color: ${props=>props.color ? props.color : '#1976d2'}
`;

export const CurrentDayWrapper = styled.div`
  height: 100%;
  width: 100%;
  border: 0.6px solid #1976d2;
  border-radius: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PreviousMonthWrapper = styled(DayWrapper)`
  color: #A9A9A9;
`;