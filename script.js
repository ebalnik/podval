var name, fruits, number;

fruits = [
    'НОС',
  'Лёля алкаш',
  'Монгол',
  'Жарковье',
  'Голубь',
  'Чирок',
  'Лодырь',
  'Изюм',
  'Скунс'
];

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
number = getRandom(0, fruits.length);

name = prompt("СКАЖИ КАК ТЕБЯ ЗОВУТ И Я СКАЖУ КТО ТЫ:");


document.write(name +" "+ fruits[parseInt(number)]);