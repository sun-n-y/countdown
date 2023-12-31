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

const hours = [
  0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12,
];

const giveaway = get('.giveaway-date');
const timer = get('.countdown-timer');

const today = new Date();

const Date2 = today.getDate();
const month2 = today.getMonth();
const hour2 = today.getHours();
const mins2 = today.getMinutes();

let futureDate = new Date(2023, month2, Date2 + 2, hour2, mins2, 0);

const getYear = futureDate.getFullYear();
const getDate = futureDate.getDate();
const getDay = daysArray[futureDate.getDay()];
const getMonth = monthsArray[futureDate.getMonth()];
const getHour = formatHour(futureDate.getHours());
const getMinute = formatMin(futureDate.getMinutes());
let ampm;

function formatHour(num) {
  return hours[num];
}
console.log(getHour);

function formatMin(num) {
  if (num <= 9) {
    return `0${num}`;
  } else {
    return num;
  }
}

if (hour2 >= 12) {
  ampm = 'pm';
} else {
  ampm = 'am';
}

giveaway.textContent = `Giveaway Ends On ${getDay}, ${getMonth} ${getDate} ${getYear} at ${getHour}:${getMinute} ${ampm}`;

const futureTime = futureDate.getTime();

const getTime = function () {
  const currentDate = new Date();
  const currentTime = currentDate.getTime();
  const t = futureTime - currentTime;

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

  if (t < 0) {
    clearInterval(countDown);
    timer.innerHTML = `<h4> Sorry, giveaway has ended</h4>`;
  }
};

let countDown = setInterval(getTime, 1000);

getTime();
