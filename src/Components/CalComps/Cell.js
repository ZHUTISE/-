import React from 'react';
import { DayOfWeekWrapper, EventListWrapper, LiWrapper, ShowDayWrapper, PreviousMonthWrapper, GridWrapper, CellWrapper, CellRow, DayWrapper, CurrentDayWrapper} from './CalendarWrappers';
import moment from 'moment';

const colors= ['#ADFF2F', '#FFFF00', '#00FFFF', '#FFC0CB', '#00FF7F', '#F0E68C', '#008000', '#FF1493', '#FFFFFF', '#D2691E'];
export default function Cell(props){
  const handleCellClick = (ev)=>{
    window.location="/AllTasks"
    console.log(ev.target)
  }
  const startDay = props.today.clone().startOf('month').startOf('week');
  const day = startDay.clone();
  day.subtract(1, 'day');
  const isCurrentMonth = (day) => props.today.isSame(day, 'month');
  const isCurrentDay = (day) => moment().isSame(day, 'day'); 
  const daysArray = [...Array(42)].map(()=> day.add(1, 'day').clone());
  return (
    <GridWrapper>
     <CellWrapper isHeader key="mon"> <DayOfWeekWrapper> Пн </DayOfWeekWrapper></CellWrapper>
     <CellWrapper isHeader key="tue">  <DayOfWeekWrapper> Вт </DayOfWeekWrapper></CellWrapper>
     <CellWrapper isHeader key="wen">  <DayOfWeekWrapper> Ср </DayOfWeekWrapper></CellWrapper>
     <CellWrapper isHeader key="thu">  <DayOfWeekWrapper>Чт </DayOfWeekWrapper></CellWrapper>
     <CellWrapper isHeader key="fri">  <DayOfWeekWrapper> Пт </DayOfWeekWrapper></CellWrapper>
     <CellWrapper isHeader isWeekend key="sat">  <DayOfWeekWrapper> Сб </DayOfWeekWrapper></CellWrapper>
     <CellWrapper isHeader isWeekend key="sun">  <DayOfWeekWrapper> Вс </DayOfWeekWrapper></CellWrapper>
     {
       daysArray.map((dayItem)=>(
         <CellWrapper
         key={dayItem.format('DDMMYYYY')}
         isWeekend={dayItem.day()===6 || dayItem.day()===0} onClick={handleCellClick}>
           
         <CellRow justifyContent={'flex-end'}>
           <ShowDayWrapper>
         <DayWrapper>
           {!isCurrentDay(dayItem) && isCurrentMonth(dayItem) && dayItem.format('DD')}
           {!isCurrentDay(dayItem) && !isCurrentMonth(dayItem) && <PreviousMonthWrapper> {dayItem.format('DD')}</PreviousMonthWrapper>}
           {isCurrentDay(dayItem) && <CurrentDayWrapper>{dayItem.format('DD')} </CurrentDayWrapper>}
           </DayWrapper>
           </ShowDayWrapper>
           <EventListWrapper>
             
             {
               props.tasks
               .filter((t, i) =>  t.date <=dayItem.format('X') && t.endDate >=dayItem.format('X'))
               .map(t=>(
                 <LiWrapper key={t.id} color={colors[t.id%10]} >{t.title}</LiWrapper>
               ))
             }
           </EventListWrapper>
    
           </CellRow>
           
         </CellWrapper>
       ))
     }
   </GridWrapper>
  );
}