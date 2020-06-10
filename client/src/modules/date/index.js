const getDateData = date => new Date(date.replace(/-/g, '/')).toDateString().split(' ');

const formatDate = (date) => {
  const [, month, day, year] = getDateData(date);
  return `${day} ${month} ${year}`;
};

module.exports = {
  formatDate,
};
