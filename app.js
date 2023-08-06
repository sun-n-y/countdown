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
const getHour = futureDate.getHours();
const getMinute = futureDate.getMinutes();

giveaway.textContent = `Giveaway Ends On ${getDay}, ${getMonth} ${getDate} ${getYear} at ${getHour}:${getMinute} am`;

const futureTime = futureDate.getTime();

const currentDate = new Date();
const currentTime = currentDate.getTime();

const t = futureTime - currentTime;

const getTime = function () {
  const days = 24 * 60 * 60 * 1000;
  const hours = 60 * 60 * 1000;
  const mins = 60 * 1000;
  const secs = 1000;

  const getDays = Math.floor(t / days);
  const getHours = Math.floor((t % days) / hours);
  const getMins = Math.floor((t % hours) / mins);
  const getSecs = Math.floor((t % mins) / secs);

  const values = [getDays, getHours, getMins, getSecs];

  const spans = document.querySelectorAll('span');

  spans.forEach(function (value, index) {
    value.textContent = values[index];
  });
};

getTime();
