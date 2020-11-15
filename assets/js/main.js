function main() {
  const date = new Date(Date.now());
  
  actualDate = handleCreateFormattedDate(date)

  handleShowDate(actualDate);
}

main();

function handleFormatWeekday(weekday) {
  const week = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  if(weekday !== 0 && weekday !== 6) {
    return `${week[weekday]}-feira`;
  } else {
    return `${week[weekday]}`;
  }
}

function handleFormatMonth(month) {
  const months = [
    'janeiro', 
    'fevereiro',
    'março', 
    'abril', 
    'maio', 
    'junho', 
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
  ];
  return `${months[month]}`;
}

function handleLeftZero(value) {
  if(value >= 10) {
    return value;
  } else {
    return `0${value}`;
  }
}

function handleCreateFormattedDate(date) {
  const weekday = handleFormatWeekday(date.getDay());
  const day = date.getDate();
  const month = handleFormatMonth(date.getMonth());
  const year = date.getFullYear();
  const hour = handleLeftZero(date.getHours());
  const minute = handleLeftZero(date.getMinutes());
  const actualDate = `${weekday}, ${day} de ${month} de ${year}, ${hour}:${minute}`;
  return actualDate;
}

function handleShowDate(actualDate) {
  const h1 = document.querySelector('#datetime');
  h1.innerHTML = actualDate;
}