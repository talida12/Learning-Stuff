export function isWeekend(date) { 
  const formattedDate = date.format('dddd');
  return (formattedDate === 'Saturday' || formattedDate === 'Sunday');
}

export default isWeekend;