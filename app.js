import get from './utils/getElement.js';

const daysArray = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thrusday',
  'Friday',
  'Saturday',
];

const monthsArray = [
  'January',
  'Feburary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const giveaway = get('.giveaway-date');

const futureDate = new Date(2023, 7, 6, 11, 10, 0);

const getYear = futureDate.getFullYear();
const getDate = futureDate.getDate();
const getDay = daysArray[futureDate.getDay()];
const getMonth = monthsArray[futureDate.getMonth()];
const getHours = futureDate.getHours();
const getMinutes = futureDate.getMinutes();

giveaway.textContent = `Giveaway Ends On ${getDay}, ${getMonth} ${getDate} ${getYear} at ${getHours}:${getMinutes} am`;
