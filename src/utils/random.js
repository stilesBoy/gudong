function getRandomNum(Min, Max) {
  var Range = Max - Min;
  var Rand = Math.random();
  return (Min + Math.round(Rand * Range));
}

module.exports = {
  getRandomNum: getRandomNum,
}