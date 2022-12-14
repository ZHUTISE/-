import React from 'react';
import DatesPicker from '../Components/CalComps/DatesPicker';
import MonthChanger from '../Components/CalComps/MonthChanger';
import moment from 'moment';
import Cell from '../Components/CalComps/Cell';

export default function Calendar( {todos} ) {
  window.moment = moment;
  moment.updateLocale('en', {week: {dow: 1}})
  const [today, setToday] = React.useState(moment());
  const startDay = today.clone().startOf('month').startOf('week');
  const endDay = startDay.clone().add(42, 'day');
  const handleDayChange = (newDay) => {
    const d = newDay.format('DD/MM/YYYY').toString().split('/');
    let diff = today.get('M');
    diff = diff-d[1] + 1;
    let diff2 = today.get('Y')
    diff2 = diff2-d[2];
    let New = today.clone().subtract(diff, 'month')
    New = New.subtract(diff2, 'year');
    setToday(New);
  }
  const handleMonthChange = (newDay) => {
    setToday(newDay)
  }
  return (
  <div>
    <DatesPicker today={today} onWork={handleDayChange}/>
    <MonthChanger today={today} onWork={handleMonthChange}/>
      <Cell today={today} tasks={todos}/>
   </div>
  );
}


