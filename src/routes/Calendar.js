import React from 'react';
import DatesPicker from '../Components/CalComps/DatesPicker';
import MonthChanger from '../Components/CalComps/MonthChanger';
import { ShadowWrapper} from '../Components/CalComps/CalendarWrappers';
import moment from 'moment';
import Cell from '../Components/CalComps/Cell';

export default function Calendar() {
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
  const tasks=[];
  // tasks for example, 
  //you can delete them if do not need them
  let task ={
    id: 1,
    date: "2022-12-15",
    endDate: "2022-12-31",
    task: "task1",
    conleted: false
  }
  let task2 ={
    id: 2,
    date: "2022-12-13",
    endDate:  "2022-12-14",
    task: "task1",
    conleted: false
  }
  let task3 ={
    id: 3,
    date: '2022-12-05',
    endDate:  "",
    task: "task1",
    conleted: false
  }
  
  localStorage.setItem(task.id, JSON.stringify(task));
  localStorage.setItem(task2.id, JSON.stringify(task2));
  localStorage.setItem(task3.id, JSON.stringify(task3));
  for (let i = 0; i< localStorage.length; i++){
    let key = localStorage.key(i);
    if (key!=="running" && key!=="__test__")
      tasks.push(JSON.parse(localStorage.getItem(key)))
  }
  const tasks2 = tasks.filter(t => 
    (t.date >= startDay.format('YYYY-MM-DD') && t.date <= endDay.format('YYYY-MM-DD')) ||
    (t.endDate>= startDay.format('YYYY-MM-DD') && t.endDate <= endDay.format('YYYY-MM-DD')) || 
    (t.endDate ==="" && t.date >=startDay.format('YYYY-MM-DD') && t.date<=endDay.format('YYYY-MM-DD')) )
  return (
  <div>
    <ShadowWrapper>
    <DatesPicker today={today} onWork={handleDayChange}/>
    <MonthChanger today={today} onWork={handleMonthChange}/>
      <Cell today={today} tasks={tasks2}/>
   </ShadowWrapper>
   </div>
  );
}


