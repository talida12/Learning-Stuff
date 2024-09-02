import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import isWeekend, { isWeekend as isSatSun } from './day-functions.js';

const today = dayjs();
console.log(today);

//15 a
const fiveDaysAfter = today.add(5, 'day');
const dateString1 = fiveDaysAfter.format('MMMM D');// month, day 
console.log(dateString1);

//15 b 
const oneMonthAfter = today.add(1, 'month');
const dateString2 = oneMonthAfter.format('MMMM D');// month, day 
console.log(dateString2);

//15 c 
const oneMonthBefore = today.subtract(1, 'month');
const dateString3 = oneMonthBefore.format('MMMM D');
console.log(dateString3);

//15 d 
const dateString4 = today.format('dddd');
console.log(dateString4);

//15 e 
console.log(isSatSun(today));
const yesterday = today.subtract(1, 'day');
console.log(isWeekend(yesterday));
