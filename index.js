function calculateTime(birthDate, to, lng) {
  let year, month, day;
  if (lng) {
    year = lng.year;
    month = lng.month;
    day = lng.day;
  } else {
    year = 'year';
    month = 'month';
    day = 'day';
  }

  birthDate = new Date(birthDate);
  to = to ? new Date(to) : new Date();
  //!check to must greater than birthDate
  if (to < birthDate) {
    throw new Error('to must be greater than birthDate');
  }
  //! check to and birthDate must be Date and in there have letters or characters
  if (isNaN(birthDate.getTime()) || isNaN(to.getTime())) {
    throw new Error('birthDate and to must be Date');
  }

  const currentDate = to;
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  let years = currentYear - birthYear;
  let months = currentMonth - birthMonth;
  let days = currentDay - birthDay;

  if (days < 0) {
    months--;
    const daysInLastMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
    days += daysInLastMonth;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years === 0) {
    if (months === 0) {
      return `${days} ${day}`;
    } else if (days === 0) {
      return `${months} ${month}`;
    } else {
      return `${months} ${month} ${days} ${day}`;
    }
  } else {
    if (months === 0 && days === 0) {
      return `${years} ${year}`;
    } else if (months === 0) {
      return `${years} ${year} ${days} ${day}`;
    } else if (days === 0) {
      return `${years} ${year} ${months} ${month}`;
    } else {
      return `${years} ${year} ${months} ${month} ${days} ${day}`;
    }
  }
}

module.exports = calculateTime;
