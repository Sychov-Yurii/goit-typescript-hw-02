/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDay {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

// Функція для визначення, чи це вихідний день
function isWeekend(day: WeekDay): boolean {
  return day === WeekDay.Saturday || day === WeekDay.Sunday;
}

// Приклад використання
console.log(isWeekend(WeekDay.Saturday)); // true
console.log(isWeekend(WeekDay.Monday));   // false
